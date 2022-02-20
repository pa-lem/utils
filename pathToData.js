const pathToData = (obj, paths) => paths
	.split(".")
	.reduce((data, path) => data && data[path], obj);

module.exports = pathToData;