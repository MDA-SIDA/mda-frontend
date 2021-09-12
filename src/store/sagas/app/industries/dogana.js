/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/DOGANA/index";
export const FETCH_DOGANA_70 = `${PREFIX}FETCH_DOGANA_70`;
export const FETCH_DOGANA_70_SUCCESS = `${PREFIX}FETCH_DOGANA_70_SUCCESS`;

const logger = new Logger("Saga>DOGANA>Index");
const _state = {
	dogana70: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_DOGANA_70_SUCCESS:
				draft.dogana70 = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchDogana70: (payload) => createAction(FETCH_DOGANA_70, {payload}),
	fetchDogana70Success: (payload) => createAction(FETCH_DOGANA_70_SUCCESS, {payload}),
};

export const sagas = {
	*fetchDogana70({payload}) {
		try {
			const {vitetQuery, regimeQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/dogana?${vitetQuery}&${regimeQuery}&type=dogana70`,
			);

			yield put(actions.fetchDogana70Success(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_DOGANA_70, sagas.fetchDogana70);
};
