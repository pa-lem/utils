const debounce = (func, wait = 500, immediate) => {
	let timeout;
	return function executedFunction() {
		const context = this;
		// eslint-disable-next-line prefer-rest-params
		const args = arguments;
		const later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

module.exports = debounce;