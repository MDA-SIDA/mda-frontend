import filters from "@sagas/filters";
import login from "@sagas/login";
import admins from "@sagas/admins";
import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";

export default function createReducer(injectedReducers, history) {
	return combineReducers({
		app: combineReducers({
			filters: combineReducers({
				index: filters,
			}),
			login: combineReducers({
				index: login,
			}),
			admins: combineReducers({
				index: admins,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
