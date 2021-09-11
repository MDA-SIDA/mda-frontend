/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/ARBK/index";
export const FETCH_ARBK_LLOJI_BIZNESIT = `${PREFIX}FETCH_ARBK_LLOJI_BIZNESIT`;
export const FETCH_ARBK_LLOJI_BIZNESIT_SUCCESS = `${PREFIX}FETCH_ARBK_LLOJI_BIZNESIT_SUCCESS`;
export const FETCH_ARBK_VITI = `${PREFIX}FETCH_ARBK_VITI`;
export const FETCH_ARBK_VITI_SUCCESS = `${PREFIX}FETCH_ARBK_VITI_SUCCESS`;
export const FETCH_ARBK_SEKTORI = `${PREFIX}FETCH_ARBK_SEKTORI`;
export const FETCH_ARBK_SEKTORI_SUCCESS = `${PREFIX}FETCH_ARBK_SEKTORI_SUCCESS`;
export const FETCH_ARBK_GJINIA = `${PREFIX}FETCH_ARBK_GJINIA`;
export const FETCH_ARBK_GJINIA_SUCCESS = `${PREFIX}FETCH_ARBK_GJINIA_SUCCESS`;
export const FETCH_ARBK_STATUSI = `${PREFIX}FETCH_ARBK_STATUSI`;
export const FETCH_ARBK_STATUSI_SUCCESS = `${PREFIX}FETCH_ARBK_STATUSI_SUCCESS`;
export const FETCH_ARBK_KOMUNA = `${PREFIX}FETCH_ARBK_KOMUNA`;
export const FETCH_ARBK_KOMUNA_SUCCESS = `${PREFIX}FETCH_ARBK_KOMUNA_SUCCESS`;

const logger = new Logger("Saga>ARBK>Index");
const _state = {
	arbkLlojiBiznesit: null,
	arbkViti: null,
	arbkSektori: null,
	arbkGjinia: null,
	arbkStatusi: null,
	arbkKomuna: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_ARBK_LLOJI_BIZNESIT_SUCCESS:
				draft.arbkLlojiBiznesit = action.payload;
				break;

			case FETCH_ARBK_VITI_SUCCESS:
				draft.arbkViti = action.payload;
				break;

			case FETCH_ARBK_SEKTORI_SUCCESS:
				draft.arbkSektori = action.payload;
				break;

			case FETCH_ARBK_GJINIA_SUCCESS:
				draft.arbkGjinia = action.payload;
				break;

			case FETCH_ARBK_STATUSI_SUCCESS:
				draft.arbkStatusi = action.payload;
				break;

			case FETCH_ARBK_KOMUNA_SUCCESS:
				draft.arbkKomuna = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchArbkLlojiBiznesit: (payload) => createAction(FETCH_ARBK_LLOJI_BIZNESIT, {payload}),
	fetchArbkLlojiBiznesitSuccess: (payload) =>
		createAction(FETCH_ARBK_LLOJI_BIZNESIT_SUCCESS, {payload}),
	fetchArbkViti: (payload) => createAction(FETCH_ARBK_VITI, {payload}),
	fetchArbkVitiSuccess: (payload) => createAction(FETCH_ARBK_VITI_SUCCESS, {payload}),
	fetchArbkSektori: (payload) => createAction(FETCH_ARBK_SEKTORI, {payload}),
	fetchArbkSektoriSuccess: (payload) => createAction(FETCH_ARBK_SEKTORI_SUCCESS, {payload}),
	fetchArbkGjinia: (payload) => createAction(FETCH_ARBK_GJINIA, {payload}),
	fetchArbkGjiniaSuccess: (payload) => createAction(FETCH_ARBK_GJINIA_SUCCESS, {payload}),
	fetchArbkStatusi: (payload) => createAction(FETCH_ARBK_STATUSI, {payload}),
	fetchArbkStatusiSuccess: (payload) => createAction(FETCH_ARBK_STATUSI_SUCCESS, {payload}),
	fetchArbkKomuna: (payload) => createAction(FETCH_ARBK_KOMUNA, {payload}),
	fetchArbkKomunaSuccess: (payload) => createAction(FETCH_ARBK_KOMUNA_SUCCESS, {payload}),
};

export const sagas = {
	*fetchArbkLlojiBiznesit({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=arbkLlojiBiznesit`,
			);

			yield put(actions.fetchArbkLlojiBiznesitSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchArbkViti({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=arbkViti`,
			);

			yield put(actions.fetchArbkVitiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchArbkSektori({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=arbkSektori`,
			);

			yield put(actions.fetchArbkSektoriSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchArbkGjinia({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=arbkGjinia`,
			);

			yield put(actions.fetchArbkGjiniaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchArbkStatusi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=arbkStatusi`,
			);

			yield put(actions.fetchArbkStatusiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchArbkKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=arbkKomuna`,
			);

			yield put(actions.fetchArbkKomunaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ARBK_LLOJI_BIZNESIT, sagas.fetchArbkLlojiBiznesit);
	yield takeLatest(FETCH_ARBK_VITI, sagas.fetchArbkViti);
	yield takeLatest(FETCH_ARBK_SEKTORI, sagas.fetchArbkSektori);
	yield takeLatest(FETCH_ARBK_GJINIA, sagas.fetchArbkGjinia);
	yield takeLatest(FETCH_ARBK_STATUSI, sagas.fetchArbkStatusi);
	yield takeLatest(FETCH_ARBK_KOMUNA, sagas.fetchArbkKomuna);
};
