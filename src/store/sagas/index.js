import {all} from "redux-saga/effects";
import {watcher as home} from "@sagas/home";

export default function* root() {
	yield all([home()]);
}
