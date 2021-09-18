import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, select} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {capitalizeFirstLetter} from "../utils";

const PREFIX = "@app/Filters/index";
// all
export const FETCH_INDUSTRITE = `${PREFIX}FETCH_INDUSTRITE`;
export const FETCH_INDUSTRITE_SUCCESS = `${PREFIX}FETCH_INDUSTRITE_SUCCESS`;
export const FETCH_REGJIONET = `${PREFIX}FETCH_REGJIONET`;
export const FETCH_REGJIONET_SUCCESS = `${PREFIX}FETCH_REGJIONET_SUCCESS`;
export const FETCH_KOMUNAT = `${PREFIX}FETCH_KOMUNAT`;
export const FETCH_KOMUNAT_SUCCESS = `${PREFIX}FETCH_KOMUNAT_SUCCESS`;
export const FETCH_VENDBANIMET = `${PREFIX}FETCH_VENDBANIMET`;
export const FETCH_VENDBANIMET_SUCCESS = `${PREFIX}FETCH_VENDBANIMET_SUCCESS`;
export const FETCH_VITET = `${PREFIX}FETCH_VITET`;
export const FETCH_VITET_SUCCESS = `${PREFIX}FETCH_VITET_SUCCESS`;
export const FETCH_REGIME = `${PREFIX}FETCH_REGIME`;
export const FETCH_REGIME_SUCCESS = `${PREFIX}FETCH_REGIME_SUCCESS`;

// selected
export const SET_SELECTED_INDUSTRITE = `${PREFIX}SET_SELECTED_INDUSTRITE`;
export const SET_SELECTED_REGJIONET = `${PREFIX}SET_SELECTED_REGJIONET`;
export const SET_SELECTED_REGJIONET_SUCCESS = `${PREFIX}SET_SELECTED_REGJIONET_SUCCESS`;
export const SET_SELECTED_KOMUNAT = `${PREFIX}SET_SELECTED_KOMUNAT`;
export const SET_SELECTED_KOMUNAT_SUCCESS = `${PREFIX}SET_SELECTED_KOMUNAT_SUCCESS`;
export const SET_SELECTED_VENDBANIMET = `${PREFIX}SET_SELECTED_VENDBANIMET`;
export const SET_SELECTED_VENDBANIMET_SUCCESS = `${PREFIX}SET_SELECTED_VENDBANIMET_SUCCESS`;
export const SET_SELECTED_VITET = `${PREFIX}SET_SELECTED_VITET`;
export const SET_SELECTED_REGIME = `${PREFIX}SET_SELECTED_REGIME`;

// filtered
export const SET_FILTERED_INDUSTRITE = `${PREFIX}SET_FILTERED_INDUSTRITE`;
export const SET_FILTERED_REGJIONET = `${PREFIX}SET_FILTERED_REGJIONET`;
export const SET_FILTERED_REGJIONET_SUCCESS = `${PREFIX}SET_FILTERED_REGJIONET_SUCCESS`;
export const SET_FILTERED_KOMUNAT = `${PREFIX}SET_FILTERED_KOMUNAT`;
export const SET_FILTERED_KOMUNAT_SUCCESS = `${PREFIX}SET_FILTERED_KOMUNAT_SUCCESS`;
export const SET_FILTERED_VENDBANIMET = `${PREFIX}SET_FILTERED_VENDBANIMET`;
export const SET_FILTERED_VENDBANIMET_SUCCESS = `${PREFIX}SET_FILTERED_VENDBANIMET_SUCCESS`;

const logger = new Logger("Saga>Filters>Index");
const _state = {
	all: {
		industrite: [],
		regjionet: [],
		komunat: [],
		vendbanimet: [],
		vitet: [],
		regime: [],
	},
	selected: {
		industria: null,
		regjionet: [],
		komunat: [],
		vendbanimet: [],
		vitet: [],
		regime: [],
	},
	filtered: {
		regjionet: [],
		komunat: [],
		vendbanimet: [],
	},
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_INDUSTRITE_SUCCESS:
				draft.all.industrite = action.payload;
				break;

			case FETCH_REGJIONET_SUCCESS:
				draft.all.regjionet = action.payload;
				draft.filtered.regjionet = action.payload;
				break;

			case FETCH_KOMUNAT_SUCCESS:
				draft.all.komunat = action.payload;
				draft.filtered.komunat = action.payload;
				break;

			case FETCH_VENDBANIMET_SUCCESS:
				draft.all.vendbanimet = action.payload;
				draft.filtered.vendbanimet = action.payload;
				break;

			case FETCH_VITET_SUCCESS:
				draft.all.vitet = action.payload;
				break;

			case FETCH_REGIME_SUCCESS:
				draft.all.regime = action.payload;
				break;

			case SET_SELECTED_INDUSTRITE:
				draft.selected.industria = action.payload;
				break;

			case SET_SELECTED_REGJIONET_SUCCESS:
				draft.selected.regjionet = action.payload;
				break;

			case SET_SELECTED_KOMUNAT_SUCCESS:
				draft.selected.komunat = action.payload;
				break;

			case SET_SELECTED_VENDBANIMET:
				draft.selected.vendbanimet = action.payload;
				break;

			case SET_SELECTED_VITET:
				draft.selected.vitet = action.payload;
				break;

			case SET_SELECTED_REGIME:
				draft.selected.regime = action.payload;
				break;

			case SET_FILTERED_INDUSTRITE:
				draft.filtered.industria = action.payload;
				break;

			case SET_FILTERED_REGJIONET_SUCCESS:
				draft.filtered.regjionet = action.payload;
				break;

			case SET_FILTERED_KOMUNAT_SUCCESS:
				draft.filtered.komunat = action.payload;
				break;

			case SET_FILTERED_VENDBANIMET_SUCCESS:
				draft.filtered.vendbanimet = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchIndustrite: (payload) => createAction(FETCH_INDUSTRITE, {payload}),
	fetchIndustriteSuccess: (payload) => createAction(FETCH_INDUSTRITE_SUCCESS, {payload}),
	fetchRegjionet: (payload) => createAction(FETCH_REGJIONET, {payload}),
	fetchRegjionetSuccess: (payload) => createAction(FETCH_REGJIONET_SUCCESS, {payload}),
	fetchKomunat: (payload) => createAction(FETCH_KOMUNAT, {payload}),
	fetchKomunatSuccess: (payload) => createAction(FETCH_KOMUNAT_SUCCESS, {payload}),
	fetchVendbanimet: (payload) => createAction(FETCH_VENDBANIMET, {payload}),
	fetchVendbanimetSuccess: (payload) => createAction(FETCH_VENDBANIMET_SUCCESS, {payload}),
	fetchVitet: (payload) => createAction(FETCH_VITET, {payload}),
	fetchVitetSuccess: (payload) => createAction(FETCH_VITET_SUCCESS, {payload}),
	fetchRegime: (payload) => createAction(FETCH_REGIME, {payload}),
	fetchRegimeSuccess: (payload) => createAction(FETCH_REGIME_SUCCESS, {payload}),
	// selected
	setSelectedIndustrite: (payload) => createAction(SET_SELECTED_INDUSTRITE, {payload}),
	setSelectedRegjionet: (payload) => createAction(SET_SELECTED_REGJIONET, {payload}),
	setSelectedRegjionetSuccess: (payload) =>
		createAction(SET_SELECTED_REGJIONET_SUCCESS, {payload}),
	setSelectedKomunat: (payload) => createAction(SET_SELECTED_KOMUNAT, {payload}),
	setSelectedKomunatSuccess: (payload) => createAction(SET_SELECTED_KOMUNAT_SUCCESS, {payload}),
	setSelectedVendbanimet: (payload) => createAction(SET_SELECTED_VENDBANIMET, {payload}),
	setSelectedVendbanimetSuccess: (payload) =>
		createAction(SET_SELECTED_VENDBANIMET_SUCCESS, {payload}),
	setSelectedVitet: (payload) => createAction(SET_SELECTED_VITET, {payload}),
	setSelectedRegime: (payload) => createAction(SET_SELECTED_REGIME, {payload}),
	// filtered
	setFilteredIndustrite: (payload) => createAction(SET_FILTERED_INDUSTRITE, {payload}),
	setFilteredRegjionet: (payload) => createAction(SET_FILTERED_REGJIONET, {payload}),
	setFilteredRegjionetSuccess: (payload) =>
		createAction(SET_FILTERED_REGJIONET_SUCCESS, {payload}),
	setFilteredKomunat: (payload) => createAction(SET_FILTERED_KOMUNAT, {payload}),
	setFilteredKomunatSuccess: (payload) => createAction(SET_FILTERED_KOMUNAT_SUCCESS, {payload}),
	setFilteredVendbanimet: (payload) => createAction(SET_FILTERED_VENDBANIMET, {payload}),
	setFilteredVendbanimetSuccess: (payload) =>
		createAction(SET_FILTERED_VENDBANIMET_SUCCESS, {payload}),
};

export const sagas = {
	*fetchIndustrite() {
		try {
			const industrite = yield axios.get(`/filters/?name=industrite`);

			yield put(actions.fetchIndustriteSuccess(industrite?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchRegjionet() {
		try {
			const regjionet = yield axios.get(`/filters/?name=regjioni`);

			yield put(actions.fetchRegjionetSuccess(regjionet?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchKomunat() {
		try {
			const komunat = yield axios.get(`/filters/?name=komuna`);

			yield put(actions.fetchKomunatSuccess(komunat?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchVitet() {
		try {
			const vitet = [
				{
					value: "2021",
					label: "2021",
				},
				{
					value: "2020",
					label: "2020",
				},
				{
					value: "2019",
					label: "2019",
				},
				{
					value: "2018",
					label: "2018",
				},
			];
			yield put(actions.fetchVitetSuccess(vitet));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchRegime() {
		try {
			const regime = yield axios.get(`/filters/?name=regime`);

			yield put(actions.fetchRegimeSuccess(regime?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchVendbanimet() {
		try {
			const vendbanimet = yield axios.get(`/filters/?name=vendbanimi`);

			const capitalizedVendbanimet = vendbanimet?.data.map((vendbanimi) => {
				vendbanimi.vendbanimiemri = capitalizeFirstLetter(vendbanimi.vendbanimiemri);
				return vendbanimi;
			});

			yield put(actions.fetchVendbanimetSuccess(capitalizedVendbanimet));
		} catch (error) {
			logger.error(error);
		}
	},
	*setSelectedRegjionet({payload}) {
		try {
			yield put(actions.setSelectedRegjionetSuccess(payload));
			const allKomunat = yield select((state) => state.app.filters?.index?.all?.komunat);
			const allVendbanimet = yield select(
				(state) => state.app.filters?.index?.all?.vendbanimet,
			);
			const regjionetIds = payload?.map((regjioni) => regjioni.value);
			if (regjionetIds?.length > 0) {
				const filteredKomunat = allKomunat.filter((komuna) =>
					regjionetIds.includes(komuna.regjioniid),
				);
				yield put(actions.setFilteredKomunatSuccess(filteredKomunat));

				const filteredKomunatIds = filteredKomunat?.map((item) => item.komunaid);
				const filteredVendbanimet = allVendbanimet.filter((vendbanimi) =>
					filteredKomunatIds.includes(vendbanimi.komunaid),
				);
				yield put(actions.setFilteredVendbanimetSuccess(filteredVendbanimet));
			} else {
				yield put(actions.setFilteredKomunatSuccess(allKomunat));
				yield put(actions.setFilteredVendbanimetSuccess(allVendbanimet));
			}
		} catch (error) {
			logger.error(error);
		}
	},
	*setSelectedKomunat({payload}) {
		try {
			yield put(actions.setSelectedKomunatSuccess(payload));
			const allVendbanimet = yield select(
				(state) => state.app.filters?.index?.all?.vendbanimet,
			);
			const allRegjionet = yield select((state) => state.app.filters?.index?.all?.regjionet);
			const allKomunat = yield select((state) => state.app.filters?.index?.all?.komunat);

			const komunatIds = payload?.map((komuna) => komuna.value);
			if (komunatIds?.length > 0) {
				const filteredVendbanimet = allVendbanimet.filter((vendbanimi) =>
					komunatIds.includes(vendbanimi.komunaid),
				);

				const regjionetIds = allKomunat
					.map((komuna) => {
						if (komunatIds.includes(komuna.komunaid)) {
							return komuna.regjioniid;
						}
						return null;
					})
					.filter(Boolean);

				const toSelectRegjionet = allRegjionet
					?.map((regjioni) => {
						if (regjionetIds.includes(regjioni.regjioniid)) {
							return {
								value: regjioni.regjioniid,
								label: regjioni.regjioniemri,
							};
						}
						return null;
					})
					.filter(Boolean);

				yield put(actions.setFilteredVendbanimetSuccess(filteredVendbanimet));
				yield put(actions.setSelectedRegjionetSuccess(toSelectRegjionet));
			} else {
				yield put(actions.setFilteredVendbanimetSuccess(allVendbanimet));
				yield put(actions.setSelectedRegjionetSuccess([]));
			}
		} catch (error) {
			logger.error(error);
		}
	},

	*setSelectedVendbanimet({payload}) {
		try {
			yield put(actions.setSelectedVendbanimetSuccess(payload));
			const allRegjionet = yield select((state) => state.app.filters?.index?.all?.regjionet);
			const allKomunat = yield select((state) => state.app.filters?.index?.all?.komunat);
			const allVendbanimet = yield select(
				(state) => state.app.filters?.index?.all?.vendbanimet,
			);

			const vendbanimetIds = payload?.map((vendbanimi) => vendbanimi.value);
			const komunatIds = [
				...new Set(
					allVendbanimet
						.filter((vendbanimi) => vendbanimetIds.includes(vendbanimi.vendbanimiid))
						.map((vendbanimi) => vendbanimi.komunaid),
				),
			];
			if (vendbanimetIds?.length > 0) {
				const selectedKomunat = allKomunat
					?.map((komuna) => {
						if (komunatIds.includes(komuna.komunaid)) {
							return {
								value: komuna.komunaid,
								label: komuna.komunaemri,
							};
						}
						return null;
					})
					.filter(Boolean);

				yield put(actions.setSelectedKomunatSuccess(selectedKomunat));

				const selectedKomunatIds = selectedKomunat.map((komuna) => komuna.value);

				const regjionetIds = allKomunat
					.map((komuna) => {
						if (selectedKomunatIds.includes(komuna.komunaid)) {
							return komuna.regjioniid;
						}
						return null;
					})
					.filter(Boolean);

				const toSelectRegjionet = allRegjionet
					?.map((regjioni) => {
						if (regjionetIds.includes(regjioni.regjioniid)) {
							return {
								value: regjioni.regjioniid,
								label: regjioni.regjioniemri,
							};
						}
						return null;
					})
					.filter(Boolean);

				yield put(actions.setSelectedRegjionetSuccess(toSelectRegjionet));
			} else {
				yield put(actions.setSelectedKomunatSuccess([]));
				yield put(actions.setSelectedRegjionetSuccess([]));
			}
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_INDUSTRITE, sagas.fetchIndustrite);
	yield takeLatest(FETCH_KOMUNAT, sagas.fetchKomunat);
	yield takeLatest(FETCH_REGJIONET, sagas.fetchRegjionet);
	yield takeLatest(FETCH_VENDBANIMET, sagas.fetchVendbanimet);
	yield takeLatest(FETCH_VITET, sagas.fetchVitet);
	yield takeLatest(FETCH_REGIME, sagas.fetchRegime);
	yield takeLatest(SET_SELECTED_REGJIONET, sagas.setSelectedRegjionet);
	yield takeLatest(SET_SELECTED_KOMUNAT, sagas.setSelectedKomunat);
	yield takeLatest(SET_SELECTED_VENDBANIMET, sagas.setSelectedVendbanimet);
};
