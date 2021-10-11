/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, all, call} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {actions as layoutActions} from "@sagas/layout";
import {getParams} from "../utils";
import {sagas as rrugetSagas} from "./rruget";

const PREFIX = "@app/AKK/index";
export const FETCH_KATEGORIA = `${PREFIX}FETCH_KATEGORIA`;
export const FETCH_KATEGORIA_SUCCESS = `${PREFIX}FETCH_KATEGORIA_SUCCESS`;
export const FETCH_PRONESIA = `${PREFIX}FETCH_PRONESIA`;
export const FETCH_PRONESIA_SUCCESS = `${PREFIX}FETCH_PRONESIA_SUCCESS`;
export const FETCH_KLASA = `${PREFIX}FETCH_KLASA`;
export const FETCH_KLASA_SUCCESS = `${PREFIX}FETCH_KLASA_SUCCESS`;
export const FETCH_LLOJI_NDERTESES_SIPERFAQJA = `${PREFIX}FETCH_LLOJI_NDERTESES_SIPERFAQJA`;
export const FETCH_LLOJI_NDERTESES_SIPERFAQJA_SUCCESS = `${PREFIX}FETCH_LLOJI_NDERTESES_SIPERFAQJA_SUCCESS`;
export const FETCH_LLOJI_NDERTESES_NUMRI = `${PREFIX}FETCH_LLOJI_NDERTESES_NUMRI`;
export const FETCH_LLOJI_NDERTESES_NUMRI_SUCCESS = `${PREFIX}FETCH_LLOJI_NDERTESES_NUMRI_SUCCESS`;
export const FETCH_TIPI_PRONES_NUMRI = `${PREFIX}FETCH_TIPI_PRONES_NUMRI`;
export const FETCH_TIPI_PRONES_NUMRI_SUCCESS = `${PREFIX}FETCH_TIPI_PRONES_NUMRI_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>AKK>Index");
const _state = {
	kategoria: null,
	pronesia: null,
	klasa: null,
	llojiNdertesesSiperfaqja: null,
	llojiNdertesesNumri: null,
	tipiPronesNumri: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_KATEGORIA_SUCCESS:
				draft.kategoria = action.payload;
				break;

			case FETCH_PRONESIA_SUCCESS:
				draft.pronesia = action.payload;
				break;

			case FETCH_KLASA_SUCCESS:
				draft.klasa = action.payload;
				break;

			case FETCH_LLOJI_NDERTESES_SIPERFAQJA_SUCCESS:
				draft.llojiNdertesesSiperfaqja = action.payload;
				break;

			case FETCH_LLOJI_NDERTESES_NUMRI_SUCCESS:
				draft.llojiNdertesesNumri = action.payload;
				break;

			case FETCH_TIPI_PRONES_NUMRI_SUCCESS:
				draft.tipiPronesNumri = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchKategoria: (payload) => createAction(FETCH_KATEGORIA, {payload}),
	fetchKategoriaSuccess: (payload) => createAction(FETCH_KATEGORIA_SUCCESS, {payload}),
	fetchPronesia: (payload) => createAction(FETCH_PRONESIA, {payload}),
	fetchPronesiaSuccess: (payload) => createAction(FETCH_PRONESIA_SUCCESS, {payload}),
	fetchKlasa: (payload) => createAction(FETCH_KLASA, {payload}),
	fetchKlasaSuccess: (payload) => createAction(FETCH_KLASA_SUCCESS, {payload}),
	fetchLlojiNdertesesSiperfaqja: (payload) =>
		createAction(FETCH_LLOJI_NDERTESES_SIPERFAQJA, {payload}),
	fetchLlojiNdertesesSiperfaqjaSuccess: (payload) =>
		createAction(FETCH_LLOJI_NDERTESES_SIPERFAQJA_SUCCESS, {payload}),
	fetchLlojiNdertesesNumri: (payload) => createAction(FETCH_LLOJI_NDERTESES_NUMRI, {payload}),
	fetchLlojiNdertesesNumriSuccess: (payload) =>
		createAction(FETCH_LLOJI_NDERTESES_NUMRI_SUCCESS, {payload}),
	fetchTipiPronesNumri: (payload) => createAction(FETCH_TIPI_PRONES_NUMRI, {payload}),
	fetchTipiPronesNumriSuccess: (payload) =>
		createAction(FETCH_TIPI_PRONES_NUMRI_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchKategoria({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=kategoria`,
			);

			yield put(actions.fetchKategoriaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchPronesia({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=pronesia`,
			);

			yield put(actions.fetchPronesiaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchKlasa({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=klasa`,
			);

			yield put(actions.fetchKlasaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchLlojiNdertesesSiperfaqja({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=llojiNdertesesSiperfaqja`,
			);

			yield put(actions.fetchLlojiNdertesesSiperfaqjaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchLlojiNdertesesNumri({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=llojiNdertesesNumri`,
			);

			yield put(actions.fetchLlojiNdertesesNumriSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchTipiPronesNumri({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=tipiPronesNumri`,
			);

			yield put(actions.fetchTipiPronesNumriSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			call(sagas.fetchKategoria, {payload}),
			call(sagas.fetchPronesia, {payload}),
			call(sagas.fetchKlasa, {payload}),
			call(sagas.fetchLlojiNdertesesSiperfaqja, {payload}),
			call(sagas.fetchLlojiNdertesesNumri, {payload}),
			call(sagas.fetchTipiPronesNumri, {payload}),
			call(rrugetSagas.fetchRruget18, {payload}),
			call(rrugetSagas.fetchRruget19, {payload}),
			call(rrugetSagas.fetchRruget20, {payload}),
			call(rrugetSagas.fetchRruget21, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
