import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";

import createAction from "@utils/action-creator";
import axios from "@utils/axios";

const PREFIX = "@app/home/index";
export const SET_LOADING = `${PREFIX}SET_LOADING`;

const _state = {
	data: [],
	loading: true,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_LOADING:
				draft.loading = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	setLoading: (payload) => createAction(SET_LOADING, {payload}),
};

export const sagas = {
	*setLoading() {
		yield put(actions.setLoading(true));
		try {
			// here we make api calls
		} catch (error) {
			console.log(error);
		} finally {
			yield put(actions.setLoading(false));
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(SET_LOADING, sagas.setLoading);
};
