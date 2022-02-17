// Get tokens as object, regarding simple or double stringify
const handleMultipleStringify = (data) => {
	if (typeof data === "object") {
		return data;
	}

	return handleMultipleStringify(JSON.parse(data));
};

module.exports = shuffle;