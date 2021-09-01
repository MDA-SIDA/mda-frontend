import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";

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

// selected
export const SET_SELECTED_INDUSTRITE = `${PREFIX}SET_SELECTED_INDUSTRITE`;
export const SET_SELECTED_REGJIONET = `${PREFIX}SET_SELECTED_REGJIONET`;
export const SET_SELECTED_KOMUNAT = `${PREFIX}SET_SELECTED_KOMUNAT`;
export const SET_SELECTED_VENDBANIMET = `${PREFIX}SET_SELECTED_VENDBANIMET`;
const logger = new Logger("Saga>Filters>Index");
const _state = {
	all: {
		industrite: [],
		regjionet: [],
		komunat: [],
		vendbanimet: [],
	},
	selected: {
		industria: null,
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
				break;

			case FETCH_KOMUNAT_SUCCESS:
				draft.all.komunat = action.payload;
				break;

			case FETCH_VENDBANIMET_SUCCESS:
				draft.all.vendbanimet = action.payload;
				break;

			case SET_SELECTED_INDUSTRITE:
				draft.selected.industria = action.payload;
				break;

			case SET_SELECTED_REGJIONET:
				draft.selected.regjionet = action.payload;
				break;

			case SET_SELECTED_KOMUNAT:
				draft.selected.komunat = action.payload;
				break;

			case SET_SELECTED_VENDBANIMET:
				draft.selected.vendbanimet = action.payload;
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
	// selected
	setSelectedIndustrite: (payload) => createAction(SET_SELECTED_INDUSTRITE, {payload}),
	setSelectedRegjionet: (payload) => createAction(SET_SELECTED_REGJIONET, {payload}),
	setSelectedKomunat: (payload) => createAction(SET_SELECTED_KOMUNAT, {payload}),
	setSelectedVendbanimet: (payload) => createAction(SET_SELECTED_VENDBANIMET, {payload}),
};

export const sagas = {
	*fetchIndustrite() {
		try {
			const industrite = yield axios.get(`/filters/?name=Industrite`);

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
	*fetchVendbanimet() {
		try {
			const vendbanimet = yield axios.get(`/filters/?name=vendbanimi`);

			yield put(actions.fetchVendbanimetSuccess(vendbanimet?.data));
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
};
