// Reduce array of arrays to object [ [ k, v ] ] => { k: v }
const reduceObject = (acc, [ k, v ]) => ({ ...acc, [k]: v });

// Reduce array of objeects to object [ { k: v }, { k2: v2 } ] => { k: v, k2, v2 }
const mergeObject = (acc, obj) => ({ ...acc, ...obj });

// Reduce array of arrays to array [ [ k, v ], [ k2, v2 ] ] => [ k, v, k2, v2 ]
const mergeArray = (acc, elem) => [ ...acc, ...elem ];

module.exports = {
	reduceObject,
	mergeObject,
	mergeArray
}