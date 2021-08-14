import filters from "@sagas/filters";
import login from "@sagas/login";
import up from "@sagas/industries/up";
import atk from "@sagas/industries/atk";
import arbk from "@sagas/industries/arbk";
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
			industries: combineReducers({
				up,
				atk,
				arbk,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
