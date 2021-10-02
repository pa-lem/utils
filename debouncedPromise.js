const debouncedPromise = (f, interval = 500) => {
	let timer = null;

	return (...args) => {
		clearTimeout(timer);
		return new Promise((resolve) => {
			timer = setTimeout(
				() => resolve(f(...args)),
				interval,
			);
		});
	};
};

module.exports = debouncedPromise;