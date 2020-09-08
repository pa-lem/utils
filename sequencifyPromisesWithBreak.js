// Sequencify promises to call one by one but breaks on first error
// promises => array of functions that return promises
// returns => array of results
const sequencifyPromisesWithBreak = async promises => promises
.reduce(
	(promiseChain, currentTask) => promiseChain
	.catch(
		error => currentTask()
		.then(
			currentResult => currentResult
		)
	),
	Promise.reject(new Error("First error"))
);