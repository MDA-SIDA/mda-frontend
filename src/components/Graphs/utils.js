import {groupBy} from "lodash";

const setIndustry = (filters, setShowGraph, showGraph) => {
	if (filters?.industria?.value) {
		setShowGraph(setKeyToTrue(showGraph, filters?.industria?.value));
	}
};

const setKeyToTrue = (object, key) => ({
	...Object.keys(object).reduce((result, k) => ({...result, [k]: false, [key]: true}), {}),
});

const areFiltersEmpty = (filters) => {
	const {regjionet, komunat, vendbanimet} = filters;
	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) return true;
	return false;
};

const areArraysEmpty = ({arrays}) => {
	const checkedArrays = arrays?.map((item) => item?.length === 0 || !item);
	return !checkedArrays?.some((item) => !item);
};

const showGraphInitialState = {
	UP: false,
	ATK: false,
	AKK: false,
	ARBK: false,
	AUV: false,
	MASHT: false,
	MPBZhR: false,
	DOGANA: false,
	// TODO: uncomment when data are ready
	// RRUGET: false,
	MF: false,
};

const getDatasets = ({
	filters,
	items,
	property,
	singleItemLabel,
	filterBy = null,
	getPercentage,
}) => {
	const {komunat, regjionet, vendbanimet} = filters;
	const xLabels = sortLabels(Object.keys(groupBy(items, filterBy)));

	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) {
		return [
			{
				label: singleItemLabel,
				data: filterBy
					? getFilteredItems({items, filterBy, property, xLabels, getPercentage})
					: items?.map((item) => item[property]),
				backgroundColor: colors[0],
			},
		];
	}
	if (vendbanimet.length > 0) {
		return generateDatasets({
			items,
			groupByLabel: "vendbanimiemri",
			property,
			filterBy,
			xLabels,
			getPercentage,
		});
	}
	if (komunat.length > 0) {
		return generateDatasets({
			items,
			groupByLabel: "komunaemri",
			property,
			filterBy,
			xLabels,
			getPercentage,
		});
	}
	if (regjionet.length > 0) {
		return generateDatasets({
			items,
			groupByLabel: "regjioniemri",
			property,
			filterBy,
			xLabels,
			getPercentage,
		});
	}
};

const colors = {
	0: "#00517D",
	1: "#FCCB11",
	2: "#02BC77",
};

const generateDatasets = ({
	items,
	groupByLabel,
	property,
	filterBy = null,
	xLabels,
	getPercentage,
}) => {
	const groupedItems = groupBy(items, groupByLabel);

	return Object.keys(groupedItems)?.map((key, index) => {
		let data = null;
		if (filterBy) {
			data = getFilteredItems({
				items: groupedItems[key],
				filterBy,
				property,
				xLabels,
				getPercentage,
			});
		}

		return {
			label: key,
			data: filterBy ? data : groupedItems[key]?.map((item) => item[property]),
			backgroundColor: colors[index],
		};
	});
};

const getFilteredItems = ({items, filterBy, property, xLabels, getPercentage = false}) => {
	// const labels = sortLabels(Object.keys(groupBy(items, filterBy)));
	const test = xLabels?.map((item) => {
		const filtered = items?.filter((x) => {
			// eslint-disable-next-line eqeqeq
			if (x[filterBy] == item) return true;
			return false;
		});
		const sum = filtered?.map((y) => y[property])?.reduce((a, b) => Number(a) + Number(b), 0);
		if (getPercentage) return sum / filtered?.length;
		return sum;
	});
	return test;
};

const getGjiniaDataset = ({items, filters}) => {
	const {komunat, regjionet, vendbanimet} = filters;

	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) {
		return [
			{
				label: "",
				data: getGjiniaDataForDatasets(items),
			},
		];
	}

	if (vendbanimet?.length > 0) {
		const groupedItems = groupBy(items, "vendbanimiemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getGjiniaDataForDatasets(groupedItems[key]),
		}));
	}

	if (komunat.length > 0) {
		const groupedItems = groupBy(items, "komunaemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getGjiniaDataForDatasets(groupedItems[key]),
		}));
	}

	if (regjionet.length > 0) {
		const groupedItems = groupBy(items, "regjioniemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getGjiniaDataForDatasets(groupedItems[key]),
		}));
	}
};

const getGjiniaDataForDatasets = (items) =>
	items?.reduce(
		({totalfemra, totalmeshkuj}, item) => ({
			totalfemra: item.gjinia === "F" ? totalfemra + Number(item.numribizneseve) : totalfemra,
			totalmeshkuj:
				item.gjinia === "M" ? totalmeshkuj + Number(item.numribizneseve) : totalmeshkuj,
		}),
		{totalfemra: 0, totalmeshkuj: 0},
	);

const getGjiniaMesatarja = (total, max) => {
	if (Number(total) === 0 || Number(max) === 0) return 0;
	return (total / max) * 100;
};

const getStatusiBizneseveDataset = ({items, filters}) => {
	const {komunat, regjionet, vendbanimet} = filters;

	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) {
		return [
			{
				label: "",
				data: getStatusiBizneseveDataForDatasets(items),
			},
		];
	}

	if (vendbanimet?.length > 0) {
		const groupedItems = groupBy(items, "vendbanimiemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getStatusiBizneseveDataForDatasets(groupedItems[key]),
		}));
	}

	if (komunat.length > 0) {
		const groupedItems = groupBy(items, "komunaemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getStatusiBizneseveDataForDatasets(groupedItems[key]),
		}));
	}

	if (regjionet.length > 0) {
		const groupedItems = groupBy(items, "regjioniemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getStatusiBizneseveDataForDatasets(groupedItems[key]),
		}));
	}
};

const getStatusiBizneseveDataForDatasets = (items) =>
	items?.reduce(
		({countaktiv, countjoaktiv}, item) => ({
			countaktiv:
				item.statusiibiznesit === "Aktiv"
					? countaktiv + Number(item.numribizneseve)
					: countaktiv,
			countjoaktiv:
				item.statusiibiznesit === "Shuar"
					? countjoaktiv + Number(item.numribizneseve)
					: countjoaktiv,
		}),
		{countaktiv: 0, countjoaktiv: 0},
	);

const sortLabels = (items) => {
	const sortedLabels = items
		.sort(
			(a, b) => a.localeCompare(b), // using String.prototype.localCompare()
		)
		.filter(Boolean);
	return sortedLabels.filter((item) => item !== "null");
};

export {
	setIndustry,
	showGraphInitialState,
	getDatasets,
	areFiltersEmpty,
	areArraysEmpty,
	getGjiniaDataset,
	getGjiniaMesatarja,
	getStatusiBizneseveDataset,
	sortLabels,
};
