const { mergeDeep } = require("./mergeDeep");

// Flatten object with recursive call
// object => object to flat
// { a: 1, b: { c: 2 } } => { a: 1, "b.c": 2 }
const flattenObject = (object) => Object.entries(object)
	.map(([k, v]) => {
		if (
			typeof v === "object"
			&& !Array.isArray(v)
		) {
			const tmpO = Object.entries(v)
				.map(([k2, v2]) => {
					return [ `${k}.${k2}`, v2 ];
				})
				.reduce((acc, [k2, v2]) => ({ ...acc, [k2]: v2 }), {});

			return flattenObject(tmpO);
		}

		return { [k]: v };
	})
	.reduce((acc, elem) => ({ ...acc, ...elem }), {});

// Unflatten object as string (ex: url with query string parameters)
// a.b=1 => { a: { b: [ 1 ] } }
const unflattenObjectPart = string => {
	const [ keys, values ] = string.split("=");

	const newValues = Array.isArray(values) ? values : values.split(",");

	const attributes = keys.split(".");

	if (attributes.length === 1) {
		// only one key
		return { [attributes[0]]: newValues }
	}

	if (attributes.length > 1) {
		const newAttributes = attributes.slice(1) // remove first attribute

		const newKeys = newAttributes.join(".");

		return {
			[attributes[0]]: unflattenObjectPart(`${newKeys}=${newValues}`)
		}
	}

	return {};
}

// Unflatten object with recursive call
// string => string to construct object on (ex: url with query sstring parameters)
// "a.b=1&a.c.d=2,3" => { a: { b: [ 1 ], c: { d: [ 2, 3 ] } } }
const unflattenObject = (string) => {
	const params = string.split("&");

	const res = params.map(p => unflattenObjectPart(p));

	return mergeDeep(...res);
}