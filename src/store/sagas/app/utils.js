const getParams = (payload) => {
	const komunaQuery = payload?.komunat?.map((komuna) => `komuna=${komuna?.value}`).join("&");
	const vendbanimiQuery = payload?.vendbanimet
		?.map((vendbanimi) => `vendbanimi=${vendbanimi?.value}`)
		.join("&");
	const regjioniQuery = payload?.regjionet
		?.map((regjioni) => `regjioni=${regjioni?.value}`)
		.join("&");

	const vitetQuery = payload?.vitet?.map((viti) => `viti=${viti?.value}`).join("&");
	const regimeQuery = payload?.regime?.map((regime) => `regime=${regime?.value}`).join("&");

	return {komunaQuery, vendbanimiQuery, regjioniQuery, vitetQuery, regimeQuery};
};

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export {getParams, capitalizeFirstLetter};
