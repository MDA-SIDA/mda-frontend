import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";

import createAction from "@utils/action-creator";
import {actions as navigation} from "@sagas/navigation";
import axios from "@utils/axios";

const PREFIX = "@app/login/index";
export const POST = `${PREFIX}POST`;
export const SET_USER = `${PREFIX}SET_USER`;
export const SET_IS_SUBMITTING = `${PREFIX}SET_IS_SUBMITTING`;

const logger = new Logger("Saga>Login>Index");
const _state = {
	user: {},
	isSubmitting: false,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_USER:
				draft.user = action.payload;
				break;
			case SET_IS_SUBMITTING:
				draft.isSubmitting = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	post: (payload) => createAction(POST, {payload}),
	setIsSubmitting: (payload) => createAction(SET_IS_SUBMITTING, {payload}),
};

export const sagas = {
	*post({payload}) {
		yield put(actions.setIsSubmitting(true));
		try {
			// TODO: uncomment when server is ready
			// const response = yield axios.post("/auth/login/", payload);
			// yield localStorage.setItem("token", response?.data?.jwtToken);
			yield put(navigation.navigate("/"));
		} catch (error) {
			logger.error(error);
		} finally {
			yield put(actions.setIsSubmitting(false));
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(POST, sagas.post);
};
