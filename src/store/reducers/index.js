import filters from "@sagas/filters";
import login from "@sagas/login";
import admins from "@sagas/admins";
import profile from "@sagas/profile";
import up from "@sagas/industries/up";
import atk from "@sagas/industries/atk";
import arbk from "@sagas/industries/arbk";
import mapl from "@sagas/industries/mapl";
import akk from "@sagas/industries/akk";
import auv from "@sagas/industries/auv";
import masht from "@sagas/industries/masht";
import mpbzhr from "@sagas/industries/mpbzhr";
import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";
import universitetiiprishtines from "@sagas/universitetet";

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
			universitetiiprishtines: combineReducers({
				index: universitetiiprishtines,
			}),
			industries: combineReducers({
				up,
				atk,
				arbk,
				mapl,
				akk,
				auv,
				masht,
				mpbzhr,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
