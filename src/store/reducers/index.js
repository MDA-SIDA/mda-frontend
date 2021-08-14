import filters from "@sagas/filters";
import login from "@sagas/login";
import up from "@sagas/industries/up";
import atk from "@sagas/industries/atk";
import arbk from "@sagas/industries/arbk";
import mapl from "@sagas/industries/mapl";
import akk from "@sagas/industries/akk";
import auv from "@sagas/industries/auv";
import masht from "@sagas/industries/masht";
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
				mapl,
				akk,
				auv,
				masht,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
