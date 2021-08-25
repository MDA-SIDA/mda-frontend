/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/ATK/index";
export const FETCH_SEKTORE_AKTIVITETET = `${PREFIX}FETCH_SEKTORE_AKTIVITETET`;
export const FETCH_SEKTORE_AKTIVITETET_SUCCESS = `${PREFIX}FETCH_SEKTORE_AKTIVITETET_SUCCESS`;
export const FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE = `${PREFIX}FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE`;
export const FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE_SUCCESS = `${PREFIX}FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE_SUCCESS`;

const logger = new Logger("Saga>ATK>Index");
const _state = {
	sektoreAktivitetet: null,
	llojiKompaniseMesatarjaPuntoreve: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SEKTORE_AKTIVITETET_SUCCESS:
				draft.sektoreAktivitetet = action.payload;
				break;

			case FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE_SUCCESS:
				draft.llojiKompaniseMesatarjaPuntoreve = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchSektoreAktivitetet: (payload) => createAction(FETCH_SEKTORE_AKTIVITETET, {payload}),
	fetchSektoreAktivitetetSuccess: (payload) =>
		createAction(FETCH_SEKTORE_AKTIVITETET_SUCCESS, {payload}),
	fetchLlojiKompaniseMesatarjaPuntoreve: (payload) =>
		createAction(FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE, {payload}),
	fetchLlojiKompaniseMesatarjaPuntoreveSuccess: (payload) =>
		createAction(FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE_SUCCESS, {payload}),
};

export const sagas = {
	*fetchSektoreAktivitetet({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=sektoreAktivitetet`,
			);

			yield put(actions.fetchSektoreAktivitetetSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchLlojiKompaniseMesatarjaPuntoreve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=llojiKompaniseMesatarjaPuntoreve`,
			);

			yield put(actions.fetchLlojiKompaniseMesatarjaPuntoreveSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_SEKTORE_AKTIVITETET, sagas.fetchSektoreAktivitetet);
	yield takeLatest(
		FETCH_LLOJI_KOMPANISE_MESATARJA_PUNTOREVE,
		sagas.fetchLlojiKompaniseMesatarjaPuntoreve,
	);
};
