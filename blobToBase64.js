const blobToBase64 = (blob) => new Promise((res, rej) => {
	try {
		const reader = new FileReader();

		reader.onload = () => {
			const dataUrl = reader.result;
			const base64 = dataUrl.split(",")[1];
			return res(base64);
		};

		reader.readAsDataURL(blob);
	} catch (e) {
		return rej(e);
	}
});