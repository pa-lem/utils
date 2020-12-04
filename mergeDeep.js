const { mergeObject } = require("./reduce");

const isObject = object => typeof object === "object"
&& !Array.isArray(object)

// Merge deep between two objects with recursive call on nested values (value, array or object)
// objects => list of objects to merge (no array, just arguments like mergeDeep(o1, o2, o3))
// returns => single object with ubpadtes
const mergeDeep = (...objects) => objects.reduce((acc, obj) => {
	if (!isObject(obj)) return acc;

	return Object.keys(obj).map((k) => {
		const pVal = acc[k];
		const oVal = obj[k];

		if (Array.isArray(pVal) && Array.isArray(oVal)) {
			return { ...acc, [k]: Array.from(new Set([ ...pVal, ...oVal ])) };
		} if (isObject(pVal) && isObject(oVal)) {
			return { ...acc, [k]: mergeDeep(pVal, oVal) };
		}
		return { ...acc, [k]: oVal };
	})
		.reduce(mergeObject, {});
}, {});

module.exports = {
	mergeDeep
}