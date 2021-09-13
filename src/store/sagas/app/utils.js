const getParams = (payload) => {
	let komunaQuery = payload?.komunat?.map((komuna) => `komuna=${komuna?.value}`).join("&"),
		vendbanimiQuery = payload?.vendbanimet
			?.map((vendbanimi) => `vendbanimi=${vendbanimi?.value}`)
			.join("&"),
		regjioniQuery = payload?.regjionet
			?.map((regjioni) => `regjioni=${regjioni?.value}`)
			.join("&"),
		vitetQuery = payload?.vitet?.map((viti) => `viti=${viti?.value}`).join("&"),
		regimeQuery = payload?.regime?.map((regime) => `regime=${regime?.value}`).join("&");

	if (komunaQuery) komunaQuery = `${komunaQuery}&`;
	if (vendbanimiQuery) vendbanimiQuery = `${vendbanimiQuery}&`;
	if (regjioniQuery) regjioniQuery = `${regjioniQuery}&`;

	if (vitetQuery) vitetQuery = `${vitetQuery}&`;
	if (regimeQuery) regimeQuery = `${regimeQuery}&`;

	return {komunaQuery, vendbanimiQuery, regjioniQuery, vitetQuery, regimeQuery};
};

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export {getParams, capitalizeFirstLetter};
