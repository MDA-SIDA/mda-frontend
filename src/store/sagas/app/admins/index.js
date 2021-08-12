// import Logger from "@utils/logger";
import produce from "immer";

import createAction from "@utils/action-creator";
// import axios from "@utils/axios";

const PREFIX = "@app/admins/index";
export const SET_ADMIN = `${PREFIX}SET_ADMIN`;

// const logger = new Logger("Saga>Header>Index");
const _state = {
	admins: [],
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_ADMIN:
				draft.admins = [...state.admins, action.payload];
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	setAdmin: (payload) => createAction(SET_ADMIN, {payload}),
};

// export const watcher = function* w() {
// 	// yield takeLatest(SEARCH, sagas.search);
// };
