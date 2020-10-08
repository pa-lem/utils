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