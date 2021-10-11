/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, all, call, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {actions as layoutActions} from "@sagas/layout";
import {getParams} from "../utils";

const PREFIX = "@app/ATK/index";
export const FETCH_ATK_VITI_OBLIGIMI = `${PREFIX}FETCH_ATK_VITI_OBLIGIMI`;
export const FETCH_ATK_VITI_OBLIGIMI_SUCCESS = `${PREFIX}FETCH_ATK_VITI_OBLIGIMI_SUCCESS`;
export const FETCH_ATK_KOMUNA_VITI_OBLIGIMI = `${PREFIX}FETCH_ATK_KOMUNA_VITI_OBLIGIMI`;
export const FETCH_ATK_KOMUNA_VITI_OBLIGIMI_SUCCESS = `${PREFIX}FETCH_ATK_KOMUNA_VITI_OBLIGIMI_SUCCESS`;
export const FETCH_ATK_SEKTORI_OBLIGIMI = `${PREFIX}FETCH_ATK_SEKTORI_OBLIGIMI`;
export const FETCH_ATK_SEKTORI_OBLIGIMI_SUCCESS = `${PREFIX}FETCH_ATK_SEKTORI_OBLIGIMI_SUCCESS`;
export const FETCH_ATK_AKTIVITETI_OBLIGIMI = `${PREFIX}FETCH_ATK_AKTIVITETI_OBLIGIMI`;
export const FETCH_ATK_AKTIVITETI_OBLIGIMI_SUCCESS = `${PREFIX}FETCH_ATK_AKTIVITETI_OBLIGIMI_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>ATK>Index");
const _state = {
	atkVitiObligimi: null,
	atkKomunaVitiObligimi: null,
	atkSektoriObligimi: null,
	atkAktivitetiObligimi: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_ATK_VITI_OBLIGIMI_SUCCESS:
				draft.atkVitiObligimi = action.payload;
				break;

			case FETCH_ATK_KOMUNA_VITI_OBLIGIMI_SUCCESS:
				draft.atkKomunaVitiObligimi = action.payload;
				break;

			case FETCH_ATK_SEKTORI_OBLIGIMI_SUCCESS:
				draft.atkSektoriObligimi = action.payload;
				break;

			case FETCH_ATK_AKTIVITETI_OBLIGIMI_SUCCESS:
				draft.atkAktivitetiObligimi = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchAtkVitiObligimi: (payload) => createAction(FETCH_ATK_VITI_OBLIGIMI, {payload}),
	fetchAtkVitiObligimiSuccess: (payload) =>
		createAction(FETCH_ATK_VITI_OBLIGIMI_SUCCESS, {payload}),
	fetchAtkKomunaVitiObligimi: (payload) =>
		createAction(FETCH_ATK_KOMUNA_VITI_OBLIGIMI, {payload}),
	fetchAtkKomunaVitiObligimiSuccess: (payload) =>
		createAction(FETCH_ATK_KOMUNA_VITI_OBLIGIMI_SUCCESS, {payload}),
	fetchAtkSektoriObligimi: (payload) => createAction(FETCH_ATK_SEKTORI_OBLIGIMI, {payload}),
	fetchAtkSektoriObligimiSuccess: (payload) =>
		createAction(FETCH_ATK_SEKTORI_OBLIGIMI_SUCCESS, {payload}),
	fetchAtkAktivitetiObligimi: (payload) => createAction(FETCH_ATK_AKTIVITETI_OBLIGIMI, {payload}),
	fetchAtkAktivitetiObligimiSuccess: (payload) =>
		createAction(FETCH_ATK_AKTIVITETI_OBLIGIMI_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchAtkVitiObligimi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);

			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=atkVitiObligimi`,
			);

			yield put(actions.fetchAtkVitiObligimiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAtkKomunaVitiObligimi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=atkKomunaVitiObligimi`,
			);

			yield put(actions.fetchAtkKomunaVitiObligimiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAtkSektoriObligimi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=atkSektoriObligimi`,
			);

			yield put(actions.fetchAtkSektoriObligimiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAtkAktivitetiObligimi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=atkAktivitetiObligimi`,
			);

			yield put(actions.fetchAtkAktivitetiObligimiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			// call(sagas.fetchAtkVitiObligimi, {payload}),
			call(sagas.fetchAtkKomunaVitiObligimi, {payload}),
			call(sagas.fetchAtkSektoriObligimi, {payload}),
			call(sagas.fetchAtkAktivitetiObligimi, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
