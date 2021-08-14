/* eslint-disable no-console */
// import Logger from "@utils/logger";
import produce from "immer";
import {takeLatest, put} from "redux-saga/effects";
import createAction from "@utils/action-creator";
// import axios from "@utils/axios";

const PREFIX = "@app/profile/index";
export const FETCH_SUCCESS = `${PREFIX}FETCH_SUCCESS`;
export const EDIT_PROFILE = `${PREFIX}EDIT_PROFILE`;
export const EDIT_PROFILE_SUCCESS = `${PREFIX}EDIT_PROFILE_SUCCESS`;

// const logger = new Logger("Saga>Header>Index");
const _state = {
	profile: {
		name: "John",
		username: "jon1",
		email: "johnd@gmail.com",
		password: "12341234",
		role: "Admin",
	},
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SUCCESS:
				draft.data = state.data;
				break;
			case EDIT_PROFILE:
				// eslint-disable-next-line no-console
				draft.profile = action.payload;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchSuccess: (payload) => createAction(FETCH_SUCCESS, {payload}),
	editProfile: (payload) => createAction(EDIT_PROFILE, {payload}),
	editProfileSuccess: (payload) => createAction(EDIT_PROFILE_SUCCESS, {payload}),
};

export const sagas = {
	*edit({payload}) {
		try {
			// TODO: endpoint call
			yield put(actions.editAdminSuccess(payload));
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(EDIT_PROFILE, sagas.edit);
};
