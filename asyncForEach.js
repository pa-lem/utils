// Asynchronous forEach loop
// array => elements to go through
// callback => function to execute on each elements
const asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		// eslint-disable-next-line no-await-in-loop
		await callback(array[index], index, array);
	}
};

module.exports = {
	asyncForEach
}