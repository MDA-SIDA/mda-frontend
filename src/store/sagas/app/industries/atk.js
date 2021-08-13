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

const logger = new Logger("Saga>ATK>Index");
const _state = {
	sektoreAktivitetet: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SEKTORE_AKTIVITETET_SUCCESS:
				draft.sektoreAktivitetet = action.payload;
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
};

export const watcher = function* w() {
	yield takeLatest(FETCH_SEKTORE_AKTIVITETET, sagas.fetchSektoreAktivitetet);
};
