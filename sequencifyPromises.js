// Sequencify promises to call one by one
// promises => array of functions that return promises
// returns => array of results
const sequencifyPromises = async promises => promises.reduce(
	(promiseChain, currentTask) => promiseChain.then(
		chainResults => currentTask().then(
			currentResult => [ ...chainResults, currentResult || [] ]
		)
	), Promise.resolve([])
);

module.exports = {
	sequencifyPromises
}