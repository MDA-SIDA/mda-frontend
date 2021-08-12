/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";

const PREFIX = "@app/Industries/index";
export const FETCH_DIPLOMUAR_BRENDA_VITIT = `${PREFIX}FETCH_DIPLOMUAR_BRENDA_VITIT`;
export const FETCH_DIPLOMUAR_BRENDA_VITIT_SUCCESS = `${PREFIX}FETCH_DIPLOMUAR_BRENDA_VITIT_SUCCESS`;
export const FETCH_MESHKUJ_FEMRA = `${PREFIX}FETCH_MESHKUJ_FEMRA`;
export const FETCH_MESHKUJ_FEMRA_SUCCESS = `${PREFIX}FETCH_MESHKUJ_FEMRA_SUCCESS`;
export const FETCH_SHTETESIA = `${PREFIX}FETCH_SHTETESIA`;
export const FETCH_SHTETESIA_SUCCESS = `${PREFIX}FETCH_SHTETESIA_SUCCESS`;
export const FETCH_FAKULTETET_BRENDA_KOMUNAVE = `${PREFIX}FETCH_FAKULTETET_BRENDA_KOMUNAVE`;
export const FETCH_FAKULTETET_BRENDA_KOMUNAVE_SUCCESS = `${PREFIX}FETCH_FAKULTETET_BRENDA_KOMUNAVE_SUCCESS`;

const logger = new Logger("Saga>Industries>Index");
const _state = {
	// UP
	diplomuarBrendaVitit: null,
	meshkujFemra: null,
	shtetesia: null,
	fakultetetBrendaKomunave: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_DIPLOMUAR_BRENDA_VITIT_SUCCESS:
				draft.diplomuarBrendaVitit = action.payload;
				break;

			case FETCH_MESHKUJ_FEMRA_SUCCESS:
				draft.meshkujFemra = action.payload;
				break;

			case FETCH_SHTETESIA_SUCCESS:
				draft.shtetesia = action.payload;
				break;

			case FETCH_FAKULTETET_BRENDA_KOMUNAVE_SUCCESS:
				draft.fakultetetBrendaKomunave = action.payload;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchDiplomuarBrendaVitit: (payload) => createAction(FETCH_DIPLOMUAR_BRENDA_VITIT, {payload}),
	fetchDiplomuarBrendaVititSuccess: (payload) =>
		createAction(FETCH_DIPLOMUAR_BRENDA_VITIT_SUCCESS, {payload}),
	fetchMeshkujFemra: (payload) => createAction(FETCH_MESHKUJ_FEMRA, {payload}),
	fetchMeshkujFemraSuccess: (payload) => createAction(FETCH_MESHKUJ_FEMRA_SUCCESS, {payload}),
	fetchShtetesia: (payload) => createAction(FETCH_SHTETESIA, {payload}),
	fetchShtetesiaSuccess: (payload) => createAction(FETCH_SHTETESIA_SUCCESS, {payload}),
	fetchFakultetetBrendaKomunave: (payload) =>
		createAction(FETCH_FAKULTETET_BRENDA_KOMUNAVE, {payload}),
	fetchFakultetetBrendaKomunaveSuccess: (payload) =>
		createAction(FETCH_FAKULTETET_BRENDA_KOMUNAVE_SUCCESS, {payload}),
};

export const sagas = {
	*fetchDiplomuarBrendaVitit({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=diplomuarBrendaVitit`,
			);

			yield put(actions.fetchDiplomuarBrendaVititSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMeshkujFemra({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=meshkujFemra`,
			);

			yield put(actions.fetchMeshkujFemraSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchShtetesia({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=shtetesia`,
			);

			yield put(actions.fetchShtetesiaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchFakultetetBrendaKomunave({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=fakultetetBrendaKomunave`,
			);

			yield put(actions.fetchFakultetetBrendaKomunaveSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_DIPLOMUAR_BRENDA_VITIT, sagas.fetchDiplomuarBrendaVitit);
	yield takeLatest(FETCH_MESHKUJ_FEMRA, sagas.fetchMeshkujFemra);
	yield takeLatest(FETCH_SHTETESIA, sagas.fetchShtetesia);
	yield takeLatest(FETCH_FAKULTETET_BRENDA_KOMUNAVE, sagas.fetchFakultetetBrendaKomunave);
};

const getParams = (payload) => {
	const komunaQuery = payload?.komunat?.map((komuna) => `komuna=${komuna?.value}`).join("&");
	const vendbanimiQuery = payload?.vendbanimet
		?.map((vendbanimi) => `vendbanimi=${vendbanimi?.value}`)
		.join("&");
	const regjioniQuery = payload?.regjionet
		?.map((regjioni) => `regjioni=${regjioni?.value}`)
		.join("&");

	return {komunaQuery, vendbanimiQuery, regjioniQuery};
};
