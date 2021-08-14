/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/MAPL/index";
export const FETCH_AKTIVITETI_KOMUNES = `${PREFIX}FETCH_AKTIVITETI_KOMUNES`;
export const FETCH_AKTIVITETI_KOMUNES_SUCCESS = `${PREFIX}FETCH_AKTIVITETI_KOMUNES_SUCCESS`;
export const FETCH_AKTIVITETI_TREGUESIT = `${PREFIX}FETCH_AKTIVITETI_TREGUESIT`;
export const FETCH_AKTIVITETI_TREGUESIT_SUCCESS = `${PREFIX}FETCH_AKTIVITETI_TREGUESIT_SUCCESS`;

const logger = new Logger("Saga>MAPL>Index");
const _state = {
	aktivitetiKomunes: null,
	aktivitetiTreguesit: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_AKTIVITETI_KOMUNES_SUCCESS:
				draft.aktivitetiKomunes = action.payload;
				break;

			case FETCH_AKTIVITETI_TREGUESIT_SUCCESS:
				draft.aktivitetiTreguesit = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchAktivitetiKomunes: (payload) => createAction(FETCH_AKTIVITETI_KOMUNES, {payload}),
	fetchAktivitetiKomunesSuccess: (payload) =>
		createAction(FETCH_AKTIVITETI_KOMUNES_SUCCESS, {payload}),
	fetchAktivitetiTreguesit: (payload) => createAction(FETCH_AKTIVITETI_TREGUESIT, {payload}),
	fetchAktivitetiTreguesitSuccess: (payload) =>
		createAction(FETCH_AKTIVITETI_TREGUESIT_SUCCESS, {payload}),
};

export const sagas = {
	*fetchAktivitetiKomunes({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=aktivitetiKomunes`,
			);

			yield put(actions.fetchAktivitetiKomunesSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAktivitetiTreguesit({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=aktivitetiTreguesit`,
			);

			yield put(actions.fetchAktivitetiTreguesitSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_AKTIVITETI_KOMUNES, sagas.fetchAktivitetiKomunes);
	yield takeLatest(FETCH_AKTIVITETI_TREGUESIT, sagas.fetchAktivitetiTreguesit);
};
