/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/ARBK/index";
export const FETCH_NR_BIZNESEVE = `${PREFIX}FETCH_NR_BIZNESEVE`;
export const FETCH_NR_BIZNESEVE_SUCCESS = `${PREFIX}FETCH_NR_BIZNESEVE_SUCCESS`;
export const FETCH_NR_BIZNESEVE_KOMUNA = `${PREFIX}FETCH_NR_BIZNESEVE_KOMUNA`;
export const FETCH_NR_BIZNESEVE_KOMUNA_SUCCESS = `${PREFIX}FETCH_NR_BIZNESEVE_KOMUNA_SUCCESS`;
export const FETCH_GJINIA = `${PREFIX}FETCH_GJINIA`;
export const FETCH_GJINIA_SUCCESS = `${PREFIX}FETCH_GJINIA_SUCCESS`;
export const FETCH_LLOJI_BIZNESIT = `${PREFIX}FETCH_LLOJI_BIZNESIT`;
export const FETCH_LLOJI_BIZNESIT_SUCCESS = `${PREFIX}FETCH_LLOJI_BIZNESIT_SUCCESS`;
export const FETCH_LLOJI_BIZNESIT_KOMUNA = `${PREFIX}FETCH_LLOJI_BIZNESIT_KOMUNA`;
export const FETCH_LLOJI_BIZNESIT_KOMUNA_SUCCESS = `${PREFIX}FETCH_LLOJI_BIZNESIT_KOMUNA_SUCCESS`;
export const FETCH_STATUSI_BIZNESEVE = `${PREFIX}FETCH_STATUSI_BIZNESEVE`;
export const FETCH_STATUSI_BIZNESEVE_SUCCESS = `${PREFIX}FETCH_STATUSI_BIZNESEVE_SUCCESS`;
export const FETCH_SEKTORE_BUJQESI = `${PREFIX}FETCH_SEKTORE_BUJQESI`;
export const FETCH_SEKTORE_BUJQESI_SUCCESS = `${PREFIX}FETCH_SEKTORE_BUJQESI_SUCCESS`;

const logger = new Logger("Saga>ARBK>Index");
const _state = {
	nrBizneseve: null,
	nrBizneseveKomuna: null,
	gjinia: null,
	llojiBiznesit: null,
	llojiBiznesitKomuna: null,
	statusiBizneseve: null,
	sektoreBujqesi: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_NR_BIZNESEVE_SUCCESS:
				draft.nrBizneseve = action.payload;
				break;

			case FETCH_NR_BIZNESEVE_KOMUNA_SUCCESS:
				draft.nrBizneseveKomuna = action.payload;
				break;

			case FETCH_GJINIA_SUCCESS:
				draft.gjinia = action.payload;
				break;

			case FETCH_LLOJI_BIZNESIT_SUCCESS:
				draft.llojiBiznesit = action.payload;
				break;

			case FETCH_LLOJI_BIZNESIT_KOMUNA_SUCCESS:
				draft.llojiBiznesitKomuna = action.payload;
				break;

			case FETCH_STATUSI_BIZNESEVE_SUCCESS:
				draft.statusiBizneseve = action.payload;
				break;

			case FETCH_SEKTORE_BUJQESI_SUCCESS:
				draft.sektoreBujqesi = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchNrBizneseve: (payload) => createAction(FETCH_NR_BIZNESEVE, {payload}),
	fetchNrBizneseveSuccess: (payload) => createAction(FETCH_NR_BIZNESEVE_SUCCESS, {payload}),
	fetchNrBizneseveKomuna: (payload) => createAction(FETCH_NR_BIZNESEVE_KOMUNA, {payload}),
	fetchNrBizneseveKomunaSuccess: (payload) =>
		createAction(FETCH_NR_BIZNESEVE_KOMUNA_SUCCESS, {payload}),
	fetchGjinia: (payload) => createAction(FETCH_GJINIA, {payload}),
	fetchGjiniaSuccess: (payload) => createAction(FETCH_GJINIA_SUCCESS, {payload}),
	fetchLlojiBiznesit: (payload) => createAction(FETCH_LLOJI_BIZNESIT, {payload}),
	fetchLlojiBiznesitSuccess: (payload) => createAction(FETCH_LLOJI_BIZNESIT_SUCCESS, {payload}),
	fetchLlojiBiznesitKomuna: (payload) => createAction(FETCH_LLOJI_BIZNESIT_KOMUNA, {payload}),
	fetchLlojiBiznesitKomunaSuccess: (payload) =>
		createAction(FETCH_LLOJI_BIZNESIT_KOMUNA_SUCCESS, {payload}),
	fetchStatusiBizneseve: (payload) => createAction(FETCH_STATUSI_BIZNESEVE, {payload}),
	fetchStatusiBizneseveSuccess: (payload) =>
		createAction(FETCH_STATUSI_BIZNESEVE_SUCCESS, {payload}),
	fetchSektoreBujqesi: (payload) => createAction(FETCH_SEKTORE_BUJQESI, {payload}),
	fetchSektoreBujqesiSuccess: (payload) => createAction(FETCH_SEKTORE_BUJQESI_SUCCESS, {payload}),
};

export const sagas = {
	*fetchNrBizneseve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=nrBizneseve`,
			);

			yield put(actions.fetchNrBizneseveSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchNrBizneseveKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=nrBizneseveKomuna`,
			);

			yield put(actions.fetchNrBizneseveKomunaSuccesss(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchGjinia({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=gjinia`,
			);

			yield put(actions.fetchGjiniaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchLlojiBiznesit({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=llojiBiznesit`,
			);

			yield put(actions.fetchLlojiBiznesitSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchLlojiBiznesitKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=llojiBiznesitKomuna`,
			);

			yield put(actions.fetchLlojiBiznesitKomunaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchStatusiBizneseve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=statusiBizneseve`,
			);

			yield put(actions.fetchStatusiBizneseveSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchSektoreBujqesi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=sektoreBujqesi`,
			);

			yield put(actions.fetchSektoreBujqesiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_NR_BIZNESEVE, sagas.fetchNrBizneseve);
	yield takeLatest(FETCH_NR_BIZNESEVE_KOMUNA, sagas.fetchNrBizneseveKomuna);
	yield takeLatest(FETCH_GJINIA, sagas.fetchGjinia);
	yield takeLatest(FETCH_LLOJI_BIZNESIT, sagas.fetchLlojiBiznesit);
	yield takeLatest(FETCH_LLOJI_BIZNESIT_KOMUNA, sagas.fetchLlojiBiznesitKomuna);
	yield takeLatest(FETCH_STATUSI_BIZNESEVE, sagas.fetchStatusiBizneseve);
	yield takeLatest(FETCH_SEKTORE_BUJQESI, sagas.fetchSektoreBujqesi);
};
