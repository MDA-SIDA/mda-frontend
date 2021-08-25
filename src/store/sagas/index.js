import {all} from "redux-saga/effects";
import {watcher as filters} from "@sagas/filters";
import {watcher as login} from "@sagas/login";
import {watcher as navigation} from "@sagas/navigation";
import {watcher as admins} from "@sagas/admins";
import {watcher as profile} from "@sagas/profile";
import {watcher as universitetiiprishtines} from "@sagas/universitetet";
import {watcher as up} from "@sagas/industries/up";
import {watcher as atk} from "@sagas/industries/atk";
import {watcher as arbk} from "@sagas/industries/arbk";
import {watcher as mapl} from "@sagas/industries/mapl";
import {watcher as akk} from "@sagas/industries/akk";
import {watcher as auv} from "@sagas/industries/auv";
import {watcher as masht} from "@sagas/industries/masht";

export default function* root() {
	yield all([
		filters(),
		login(),
		navigation(),
		admins(),
		profile(),
		arbk(),
		universitetiiprishtines(),
		up(),
		atk(),
		arbk(),
		mapl(),
		akk(),
		auv(),
		masht(),
	]);
}
