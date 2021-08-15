const setIndustry = (filters, setShowGraph, showGraph) => {
	if (filters?.industria?.value === "UP") {
		setShowGraph(setKeyToTrue(showGraph, "up"));
	}
	if (filters?.industria?.value === "ATK") {
		setShowGraph(setKeyToTrue(showGraph, "atk"));
	}
	if (filters?.industria?.value === "AKK") {
		setShowGraph(setKeyToTrue(showGraph, "akk"));
	}
	if (filters?.industria?.value === "ARBK") {
		setShowGraph(setKeyToTrue(showGraph, "arbk"));
	}
	if (filters?.industria?.value === "AUV") {
		setShowGraph(setKeyToTrue(showGraph, "auv"));
	}
	if (filters?.industria?.value === "MAPL") {
		setShowGraph(setKeyToTrue(showGraph, "mapl"));
	}
	if (filters?.industria?.value === "MASHT") {
		setShowGraph(setKeyToTrue(showGraph, "masht"));
	}
	if (filters?.industria?.value === "MPBZhR") {
		setShowGraph(setKeyToTrue(showGraph, "mpbzhr"));
	}
	if (filters?.industria?.value === "DOGANA") {
		setShowGraph(setKeyToTrue(showGraph, "dogana"));
	}
};

const setKeyToTrue = (object, key) => ({
	...Object.keys(object).reduce((result, k) => ({...result, [k]: false, [key]: true}), {}),
});

const showGraphInitialState = {
	up: false,
	atk: false,
	akk: false,
	arbk: false,
	auv: false,
	mapl: false,
	masht: false,
	mpbzhr: false,
	dogana: false,
};

export {setIndustry, showGraphInitialState};
