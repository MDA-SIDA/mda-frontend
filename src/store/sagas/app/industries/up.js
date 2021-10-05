/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, all, call} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "@sagas/utils";
import {actions as layoutActions} from "@sagas/layout";

const PREFIX = "@app/UP/index";
export const FETCH_STATUSI = `${PREFIX}FETCH_STATUSI`;
export const FETCH_STATUSI_SUCCESS = `${PREFIX}FETCH_STATUSI_SUCCESS`;
export const FETCH_NIVELI = `${PREFIX}FETCH_NIVELI`;
export const FETCH_NIVELI_SUCCESS = `${PREFIX}FETCH_NIVELI_SUCCESS`;
export const FETCH_KOMBI_NUMRI_STUDENTEVE = `${PREFIX}FETCH_KOMBI_NUMRI_STUDENTEVE`;
export const FETCH_KOMBI_NUMRI_STUDENTEVE_SUCCESS = `${PREFIX}FETCH_KOMBI_NUMRI_STUDENTEVE_SUCCESS`;
export const FETCH_GJINIA = `${PREFIX}FETCH_GJINIA`;
export const FETCH_GJINIA_SUCCESS = `${PREFIX}FETCH_GJINIA_SUCCESS`;
export const FETCH_FAKULTETI_NUMRI_STUDENTEVE = `${PREFIX}FETCH_FAKULTETI_NUMRI_STUDENTEVE`;
export const FETCH_FAKULTETI_NUMRI_STUDENTEVE_SUCCESS = `${PREFIX}FETCH_FAKULTETI_NUMRI_STUDENTEVE_SUCCESS`;
export const FETCH_VITI_DIPLOMIMIT = `${PREFIX}FETCH_VITI_DIPLOMIMIT`;
export const FETCH_VITI_DIPLOMIMIT_SUCCESS = `${PREFIX}FETCH_VITI_DIPLOMIMIT_SUCCESS`;
export const FETCH_KOMUNA_NUMRI_STUDENTEVE = `${PREFIX}FETCH_KOMUNA_NUMRI_STUDENTEVE`;
export const FETCH_KOMUNA_NUMRI_STUDENTEVE_SUCCESS = `${PREFIX}FETCH_KOMUNA_NUMRI_STUDENTEVE_SUCCESS`;
export const FETCH_DIPLOMUAR = `${PREFIX}FETCH_DIPLOMUAR`;
export const FETCH_DIPLOMUAR_SUCCESS = `${PREFIX}FETCH_DIPLOMUAR_SUCCESS`;
export const FETCH_FAKULTETI_NOTA_MESATARE = `${PREFIX}FETCH_FAKULTETI_NOTA_MESATARE`;
export const FETCH_FAKULTETI_NOTA_MESATARE_SUCCESS = `${PREFIX}FETCH_FAKULTETI_NOTA_MESATARE_SUCCESS`;
export const FETCH_KOMUNA_NOTA_MESATARE = `${PREFIX}FETCH_KOMUNA_NOTA_MESATARE`;
export const FETCH_KOMUNA_NOTA_MESATARE_SUCCESS = `${PREFIX}FETCH_KOMUNA_NOTA_MESATARE_SUCCESS`;
export const FETCH_KOMBI_NOTA_MESATARE = `${PREFIX}FETCH_KOMBI_NOTA_MESATARE`;
export const FETCH_KOMBI_NOTA_MESATARE_SUCCESS = `${PREFIX}FETCH_KOMBI_NOTA_MESATARE_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>UP>Index");
const _state = {
	statusi: null,
	niveli: null,
	kombiNumriStudenteve: null,
	gjinia: null,
	fakultetiNumriStudenteve: null,
	vitiDiplomimit: null,
	komunaNumriStudenteve: null,
	diplomuar: null,
	fakultetiNotaMesatare: null,
	komunaNotaMesatare: null,
	kombiNotaMesatare: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_STATUSI_SUCCESS:
				draft.statusi = action.payload;
				break;

			case FETCH_NIVELI_SUCCESS:
				draft.niveli = action.payload;
				break;

			case FETCH_KOMBI_NUMRI_STUDENTEVE_SUCCESS:
				draft.kombiNumriStudenteve = action.payload;
				break;

			case FETCH_GJINIA_SUCCESS:
				draft.gjinia = action.payload;
				break;

			case FETCH_FAKULTETI_NUMRI_STUDENTEVE_SUCCESS:
				draft.fakultetiNumriStudenteve = action.payload;
				break;

			case FETCH_VITI_DIPLOMIMIT_SUCCESS:
				draft.vitiDiplomimit = action.payload;
				break;

			case FETCH_KOMUNA_NUMRI_STUDENTEVE_SUCCESS:
				draft.komunaNumriStudenteve = action.payload;
				break;

			case FETCH_DIPLOMUAR_SUCCESS:
				draft.diplomuar = action.payload;
				break;

			case FETCH_FAKULTETI_NOTA_MESATARE_SUCCESS:
				draft.fakultetiNotaMesatare = action.payload;
				break;

			case FETCH_KOMUNA_NOTA_MESATARE_SUCCESS:
				draft.komunaNotaMesatare = action.payload;
				break;

			case FETCH_KOMBI_NOTA_MESATARE_SUCCESS:
				draft.kombiNotaMesatare = action.payload;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchStatusi: (payload) => createAction(FETCH_STATUSI, {payload}),
	fetchStatusiSuccess: (payload) => createAction(FETCH_STATUSI_SUCCESS, {payload}),
	fetchNiveli: (payload) => createAction(FETCH_NIVELI, {payload}),
	fetchNiveliSuccess: (payload) => createAction(FETCH_NIVELI_SUCCESS, {payload}),
	fetchKombiNumriStudenteve: (payload) => createAction(FETCH_KOMBI_NUMRI_STUDENTEVE, {payload}),
	fetchKombiNumriStudenteveSuccess: (payload) =>
		createAction(FETCH_KOMBI_NUMRI_STUDENTEVE_SUCCESS, {payload}),
	fetchGjinia: (payload) => createAction(FETCH_GJINIA, {payload}),
	fetchGjiniaSuccess: (payload) => createAction(FETCH_GJINIA_SUCCESS, {payload}),
	fetchFakultetiNumriStudenteve: (payload) =>
		createAction(FETCH_FAKULTETI_NUMRI_STUDENTEVE, {payload}),
	fetchFakultetiNumriStudenteveSuccess: (payload) =>
		createAction(FETCH_FAKULTETI_NUMRI_STUDENTEVE_SUCCESS, {payload}),
	fetchVitiDiplomimit: (payload) => createAction(FETCH_VITI_DIPLOMIMIT, {payload}),
	fetchVitiDiplomimitSuccess: (payload) => createAction(FETCH_VITI_DIPLOMIMIT_SUCCESS, {payload}),
	fetchKomunaNumriStudenteve: (payload) => createAction(FETCH_KOMUNA_NUMRI_STUDENTEVE, {payload}),
	fetchKomunaNumriStudenteveSuccess: (payload) =>
		createAction(FETCH_KOMUNA_NUMRI_STUDENTEVE_SUCCESS, {payload}),
	fetchDiplomuar: (payload) => createAction(FETCH_DIPLOMUAR, {payload}),
	fetchDiplomuarSuccess: (payload) => createAction(FETCH_DIPLOMUAR_SUCCESS, {payload}),
	fetchFakultetiNotaMesatare: (payload) => createAction(FETCH_FAKULTETI_NOTA_MESATARE, {payload}),
	fetchFakultetiNotaMesatareSuccess: (payload) =>
		createAction(FETCH_FAKULTETI_NOTA_MESATARE_SUCCESS, {payload}),
	fetchKomunaNotaMesatare: (payload) => createAction(FETCH_KOMUNA_NOTA_MESATARE, {payload}),
	fetchKomunaNotaMesatareSuccess: (payload) =>
		createAction(FETCH_KOMUNA_NOTA_MESATARE_SUCCESS, {payload}),
	fetchKombiNotaMesatare: (payload) => createAction(FETCH_KOMBI_NOTA_MESATARE, {payload}),
	fetchKombiNotaMesatareSuccess: (payload) =>
		createAction(FETCH_KOMBI_NOTA_MESATARE_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchStatusi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=statusi`,
			);

			yield put(actions.fetchStatusiSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchNiveli({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=niveli`,
			);

			yield put(actions.fetchNiveliSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchKombiNumriStudenteve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=kombiNumriStudenteve`,
			);

			yield put(actions.fetchKombiNumriStudenteveSuccess(response?.data));
			return response.data;
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
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchFakultetiNumriStudenteve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=fakultetiNumriStudenteve`,
			);

			yield put(actions.fetchFakultetiNumriStudenteveSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchVitiDiplomimit({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=vitiDiplomimit`,
			);

			yield put(actions.fetchVitiDiplomimitSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchKomunaNumriStudenteve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=komunaNumriStudenteve`,
			);

			yield put(actions.fetchKomunaNumriStudenteveSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchDiplomuar({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=diplomuar`,
			);

			yield put(actions.fetchDiplomuarSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchFakultetiNotaMesatare({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=fakultetiNotaMesatare`,
			);

			yield put(actions.fetchFakultetiNotaMesatareSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchKomunaNotaMesatare({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=komunaNotaMesatare`,
			);

			yield put(actions.fetchKomunaNotaMesatareSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchKombiNotaMesatare({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=kombiNotaMesatare`,
			);

			yield put(actions.fetchKombiNotaMesatareSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			call(sagas.fetchStatusi, {payload}),
			call(sagas.fetchNiveli, {payload}),
			call(sagas.fetchKombiNumriStudenteve, {payload}),
			call(sagas.fetchGjinia, {payload}),
			call(sagas.fetchFakultetiNumriStudenteve, {payload}),
			call(sagas.fetchVitiDiplomimit, {payload}),
			call(sagas.fetchKomunaNumriStudenteve, {payload}),
			call(sagas.fetchDiplomuar, {payload}),
			call(sagas.fetchFakultetiNotaMesatare, {payload}),
			call(sagas.fetchKomunaNotaMesatare, {payload}),
			call(sagas.fetchKombiNotaMesatare, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
