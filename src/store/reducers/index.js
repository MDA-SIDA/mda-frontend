import filters from "@sagas/filters";
import login from "@sagas/login";
import admins from "@sagas/admins";
import profile from "@sagas/profile";
import arbk from "@sagas/arbk";
import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";
import uni from "@sagas/universitetet";

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
			profile: combineReducers({
				index: profile,
			}),
			arbk: combineReducers({
				index: arbk,
			}),
			uni: combineReducers({
				index: uni,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
