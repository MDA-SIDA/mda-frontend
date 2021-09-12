/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "@sagas/utils";

const PREFIX = "@app/MPBZHR/index";
export const FETCH_MPBZHR_MASA_SHUMA_PAGUAR = `${PREFIX}FETCH_MPBZHR_MASA_SHUMA_PAGUAR`;
export const FETCH_MPBZHR_MASA_SHUMA_PAGUAR_SUCCESS = `${PREFIX}FETCH_MPBZHR_MASA_SHUMA_PAGUAR_SUCCESS`;
export const FETCH_MPBZHR_VITI_HA = `${PREFIX}FETCH_MPBZHR_VITI_HA`;
export const FETCH_MPBZHR_VITI_HA_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_HA_SUCCESS`;
export const FETCH_MPBZHR_VITI_KOSHERE = `${PREFIX}FETCH_MPBZHR_VITI_KOSHERE`;
export const FETCH_MPBZHR_VITI_KOSHERE_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_KOSHERE_SUCCESS`;
export const FETCH_MPBZHR_VITI_KRERE = `${PREFIX}FETCH_MPBZHR_VITI_KRERE`;
export const FETCH_MPBZHR_VITI_KRERE_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_KRERE_SUCCESS`;
export const FETCH_MPBZHR_VITI_LITER = `${PREFIX}FETCH_MPBZHR_VITI_LITER`;
export const FETCH_MPBZHR_VITI_LITER_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_LITER_SUCCESS`;
export const FETCH_MPBZHR_VITI_PULAVOJSE = `${PREFIX}FETCH_MPBZHR_VITI_PULAVOJSE`;
export const FETCH_MPBZHR_VITI_PULAVOJSE_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_PULAVOJSE_SUCCESS`;
export const FETCH_MPBZHR_VITI_THELLEZA = `${PREFIX}FETCH_MPBZHR_VITI_THELLEZA`;
export const FETCH_MPBZHR_VITI_THELLEZA_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_THELLEZA_SUCCESS`;

export const FETCH_MPBZHR_VITI_2019_HA = `${PREFIX}FETCH_MPBZHR_VITI_2019_HA`;
export const FETCH_MPBZHR_VITI_2019_HA_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_HA_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_KOSHERE = `${PREFIX}FETCH_MPBZHR_VITI_2019_KOSHERE`;
export const FETCH_MPBZHR_VITI_2019_KOSHERE_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_KOSHERE_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_KRERE = `${PREFIX}FETCH_MPBZHR_VITI_2019_KRERE`;
export const FETCH_MPBZHR_VITI_2019_KRERE_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_KRERE_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_LITER = `${PREFIX}FETCH_MPBZHR_VITI_2019_LITER`;
export const FETCH_MPBZHR_VITI_2019_LITER_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_LITER_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_PULAVOJSE = `${PREFIX}FETCH_MPBZHR_VITI_2019_PULAVOJSE`;
export const FETCH_MPBZHR_VITI_2019_PULAVOJSE_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_PULAVOJSE_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_THELLEZA = `${PREFIX}FETCH_MPBZHR_VITI_2019_THELLEZA`;
export const FETCH_MPBZHR_VITI_2019_THELLEZA_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_THELLEZA_SUCCESS`;

export const FETCH_MPBZHR_VITI_2019_HA_F = `${PREFIX}FETCH_MPBZHR_VITI_2019_HA_F`;
export const FETCH_MPBZHR_VITI_2019_HA_F_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_HA_F_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_KOSHERE_F = `${PREFIX}FETCH_MPBZHR_VITI_2019_KOSHERE_F`;
export const FETCH_MPBZHR_VITI_2019_KOSHERE_F_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_KOSHERE_F_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_KRERE_F = `${PREFIX}FETCH_MPBZHR_VITI_2019_KRERE_F`;
export const FETCH_MPBZHR_VITI_2019_KRERE_F_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_KRERE_F_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_LITER_F = `${PREFIX}FETCH_MPBZHR_VITI_2019_LITER_F`;
export const FETCH_MPBZHR_VITI_2019_LITER_F_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_LITER_F_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_PULAVOJSE_F = `${PREFIX}FETCH_MPBZHR_VITI_2019_PULAVOJSE_F`;
export const FETCH_MPBZHR_VITI_2019_PULAVOJSE_F_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_PULAVOJSE_F_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_THELLEZA_F = `${PREFIX}FETCH_MPBZHR_VITI_2019_THELLEZA_F`;
export const FETCH_MPBZHR_VITI_2019_THELLEZA_F_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_THELLEZA_F_SUCCESS`;

export const FETCH_MPBZHR_VITI_2019_HA_M = `${PREFIX}FETCH_MPBZHR_VITI_2019_HA_M`;
export const FETCH_MPBZHR_VITI_2019_HA_M_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_HA_M_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_KOSHERE_M = `${PREFIX}FETCH_MPBZHR_VITI_2019_KOSHERE_M`;
export const FETCH_MPBZHR_VITI_2019_KOSHERE_M_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_KOSHERE_M_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_KRERE_M = `${PREFIX}FETCH_MPBZHR_VITI_2019_KRERE_M`;
export const FETCH_MPBZHR_VITI_2019_KRERE_M_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_KRERE_M_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_LITER_M = `${PREFIX}FETCH_MPBZHR_VITI_2019_LITER_M`;
export const FETCH_MPBZHR_VITI_2019_LITER_M_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_LITER_M_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_PULAVOJSE_M = `${PREFIX}FETCH_MPBZHR_VITI_2019_PULAVOJSE_M`;
export const FETCH_MPBZHR_VITI_2019_PULAVOJSE_M_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_PULAVOJSE_M_SUCCESS`;
export const FETCH_MPBZHR_VITI_2019_THELLEZA_M = `${PREFIX}FETCH_MPBZHR_VITI_2019_THELLEZA_M`;
export const FETCH_MPBZHR_VITI_2019_THELLEZA_M_SUCCESS = `${PREFIX}FETCH_MPBZHR_VITI_2019_THELLEZA_M_SUCCESS`;

const logger = new Logger("Saga>MPBZHR>Index");
const _state = {
	mpbzhrMasaShumaPaguar: null,
	mpbzhrVitiHa: null,
	mpbzhrVitiKoshere: null,
	mpbzhrVitiKrere: null,
	mpbzhrVitiLiter: null,
	mpbzhrVitiPulavojse: null,
	mpbzhrVitiThelleza: null,
	mpbzhrViti2019Ha: null,
	mpbzhrViti2019Koshere: null,
	mpbzhrViti2019Krere: null,
	mpbzhrViti2019Liter: null,
	mpbzhrViti2019Pulavojse: null,
	mpbzhrViti2019Thelleza: null,
	mpbzhrViti2019HaF: null,
	mpbzhrViti2019KoshereF: null,
	mpbzhrViti2019KrereF: null,
	mpbzhrViti2019LiterF: null,
	mpbzhrViti2019PulavojseF: null,
	mpbzhrViti2019ThellezaF: null,
	mpbzhrViti2019HaM: null,
	mpbzhrViti2019KoshereM: null,
	mpbzhrViti2019KrereM: null,
	mpbzhrViti2019LiterM: null,
	mpbzhrViti2019PulavojseM: null,
	mpbzhrViti2019ThellezaM: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_MPBZHR_MASA_SHUMA_PAGUAR_SUCCESS:
				draft.mpbzhrMasaShumaPaguar = action.payload;
				break;

			case FETCH_MPBZHR_VITI_HA_SUCCESS:
				draft.mpbzhrVitiHa = action.payload;
				break;

			case FETCH_MPBZHR_VITI_KOSHERE_SUCCESS:
				draft.mpbzhrVitiKoshere = action.payload;
				break;

			case FETCH_MPBZHR_VITI_KRERE_SUCCESS:
				draft.mpbzhrVitiKrere = action.payload;
				break;

			case FETCH_MPBZHR_VITI_LITER_SUCCESS:
				draft.mpbzhrVitiLiter = action.payload;
				break;

			case FETCH_MPBZHR_VITI_PULAVOJSE_SUCCESS:
				draft.mpbzhrVitiPulavojse = action.payload;
				break;

			case FETCH_MPBZHR_VITI_THELLEZA_SUCCESS:
				draft.mpbzhrVitiThelleza = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_HA_SUCCESS:
				draft.mpbzhrViti2019Ha = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_KOSHERE_SUCCESS:
				draft.mpbzhrViti2019Koshere = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_KRERE_SUCCESS:
				draft.mpbzhrViti2019Krere = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_LITER_SUCCESS:
				draft.mpbzhrViti2019Liter = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_PULAVOJSE_SUCCESS:
				draft.mpbzhrViti2019Pulavojse = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_THELLEZA_SUCCESS:
				draft.mpbzhrViti2019Thelleza = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_HA_F_SUCCESS:
				draft.mpbzhrViti2019HaF = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_KOSHERE_F_SUCCESS:
				draft.mpbzhrViti2019KoshereF = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_KRERE_F_SUCCESS:
				draft.mpbzhrViti2019KrereF = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_LITER_F_SUCCESS:
				draft.mpbzhrViti2019LiterF = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_PULAVOJSE_F_SUCCESS:
				draft.mpbzhrViti2019PulavojseF = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_THELLEZA_F_SUCCESS:
				draft.mpbzhrViti2019ThellezaF = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_HA_M_SUCCESS:
				draft.mpbzhrViti2019HaM = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_KOSHERE_M_SUCCESS:
				draft.mpbzhrViti2019KoshereM = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_KRERE_M_SUCCESS:
				draft.mpbzhrViti2019KrereM = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_LITER_M_SUCCESS:
				draft.mpbzhrViti2019LiterM = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_PULAVOJSE_M_SUCCESS:
				draft.mpbzhrViti2019PulavojseM = action.payload;
				break;

			case FETCH_MPBZHR_VITI_2019_THELLEZA_M_SUCCESS:
				draft.mpbzhrViti2019ThellezaM = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchMpbzhrMasaShumaPaguar: (payload) =>
		createAction(FETCH_MPBZHR_MASA_SHUMA_PAGUAR, {payload}),
	fetchMpbzhrMasaShumaPaguarSuccess: (payload) =>
		createAction(FETCH_MPBZHR_MASA_SHUMA_PAGUAR_SUCCESS, {payload}),
	fetchMpbzhrVitiHa: (payload) => createAction(FETCH_MPBZHR_VITI_HA, {payload}),
	fetchMpbzhrVitiHaSuccess: (payload) => createAction(FETCH_MPBZHR_VITI_HA_SUCCESS, {payload}),
	fetchMpbzhrVitiKoshere: (payload) => createAction(FETCH_MPBZHR_VITI_KOSHERE, {payload}),
	fetchMpbzhrVitiKoshereSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_KOSHERE_SUCCESS, {payload}),
	fetchMpbzhrVitiKrere: (payload) => createAction(FETCH_MPBZHR_VITI_KRERE, {payload}),
	fetchMpbzhrVitiKrereSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_KRERE_SUCCESS, {payload}),
	fetchMpbzhrVitiLiter: (payload) => createAction(FETCH_MPBZHR_VITI_LITER, {payload}),
	fetchMpbzhrVitiLiterSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_LITER_SUCCESS, {payload}),
	fetchMpbzhrVitiPulavojse: (payload) => createAction(FETCH_MPBZHR_VITI_PULAVOJSE, {payload}),
	fetchMpbzhrVitiPulavojseSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_PULAVOJSE_SUCCESS, {payload}),
	fetchMpbzhrVitiThelleza: (payload) => createAction(FETCH_MPBZHR_VITI_THELLEZA, {payload}),
	fetchMpbzhrVitiThellezaSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_THELLEZA_SUCCESS, {payload}),

	fetchMpbzhrViti2019Ha: (payload) => createAction(FETCH_MPBZHR_VITI_2019_HA, {payload}),
	fetchMpbzhrViti2019HaSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_HA_SUCCESS, {payload}),
	fetchMpbzhrViti2019Koshere: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KOSHERE, {payload}),
	fetchMpbzhrViti2019KoshereSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KOSHERE_SUCCESS, {payload}),
	fetchMpbzhrViti2019Krere: (payload) => createAction(FETCH_MPBZHR_VITI_2019_KRERE, {payload}),
	fetchMpbzhrViti2019KrereSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KRERE_SUCCESS, {payload}),
	fetchMpbzhrViti2019Liter: (payload) => createAction(FETCH_MPBZHR_VITI_2019_LITER, {payload}),
	fetchMpbzhrViti2019LiterSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_LITER_SUCCESS, {payload}),
	fetchMpbzhrViti2019Pulavojse: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_PULAVOJSE, {payload}),
	fetchMpbzhrViti2019PulavojseSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_PULAVOJSE_SUCCESS, {payload}),
	fetchMpbzhrViti2019Thelleza: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_THELLEZA, {payload}),
	fetchMpbzhrViti2019ThellezaSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_THELLEZA_SUCCESS, {payload}),

	fetchMpbzhrViti2019HaF: (payload) => createAction(FETCH_MPBZHR_VITI_2019_HA_F, {payload}),
	fetchMpbzhrViti2019HaFSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_HA_F_SUCCESS, {payload}),
	fetchMpbzhrViti2019KoshereF: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KOSHERE_F, {payload}),
	fetchMpbzhrViti2019KoshereFSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KOSHERE_F_SUCCESS, {payload}),
	fetchMpbzhrViti2019KrereF: (payload) => createAction(FETCH_MPBZHR_VITI_2019_KRERE_F, {payload}),
	fetchMpbzhrViti2019KrereFSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KRERE_F_SUCCESS, {payload}),
	fetchMpbzhrViti2019LiterF: (payload) => createAction(FETCH_MPBZHR_VITI_2019_LITER_F, {payload}),
	fetchMpbzhrViti2019LiterFSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_LITER_F_SUCCESS, {payload}),
	fetchMpbzhrViti2019PulavojseF: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_PULAVOJSE_F, {payload}),
	fetchMpbzhrViti2019PulavojseFSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_PULAVOJSE_F_SUCCESS, {payload}),
	fetchMpbzhrViti2019ThellezaF: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_THELLEZA_F, {payload}),
	fetchMpbzhrViti2019ThellezaFSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_THELLEZA_F_SUCCESS, {payload}),

	fetchMpbzhrViti2019HaM: (payload) => createAction(FETCH_MPBZHR_VITI_2019_HA_M, {payload}),
	fetchMpbzhrViti2019HaMSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_HA_M_SUCCESS, {payload}),
	fetchMpbzhrViti2019KoshereM: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KOSHERE_M, {payload}),
	fetchMpbzhrViti2019KoshereMSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KOSHERE_M_SUCCESS, {payload}),
	fetchMpbzhrViti2019KrereM: (payload) => createAction(FETCH_MPBZHR_VITI_2019_KRERE_M, {payload}),
	fetchMpbzhrViti2019KrereMSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_KRERE_M_SUCCESS, {payload}),
	fetchMpbzhrViti2019LiterM: (payload) => createAction(FETCH_MPBZHR_VITI_2019_LITER_M, {payload}),
	fetchMpbzhrViti2019LiterMSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_LITER_M_SUCCESS, {payload}),
	fetchMpbzhrViti2019PulavojseM: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_PULAVOJSE_M, {payload}),
	fetchMpbzhrViti2019PulavojseMSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_PULAVOJSE_M_SUCCESS, {payload}),
	fetchMpbzhrViti2019ThellezaM: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_THELLEZA_M, {payload}),
	fetchMpbzhrViti2019ThellezaMSuccess: (payload) =>
		createAction(FETCH_MPBZHR_VITI_2019_THELLEZA_M_SUCCESS, {payload}),
};

export const sagas = {
	*fetchMpbzhrMasaShumaPaguar({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrMasaShumaPaguar`,
			);

			yield put(actions.fetchStatusiSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrVitiHa({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrVitiHa`,
			);

			yield put(actions.fetchMpbzhrVitiHaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrVitiKoshere({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrVitiKoshere`,
			);

			yield put(actions.fetchMpbzhrVitiKoshereSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrVitiKrere({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrVitiKrere`,
			);

			yield put(actions.fetchMpbzhrVitiKrereSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrVitiLiter({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrVitiLiter`,
			);

			yield put(actions.fetchMpbzhrVitiLiterSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrVitiPulavojse({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrVitiPulavojse`,
			);

			yield put(actions.fetchMpbzhrVitiPulavojseSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrVitiThelleza({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrVitiThelleza`,
			);

			yield put(actions.fetchMpbzhrVitiThellezaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},

	*fetchMpbzhrViti2019Ha({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019Ha`,
			);

			yield put(actions.fetchMpbzhrViti2019HaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019Koshere({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019Koshere`,
			);

			yield put(actions.fetchMpbzhrViti2019KoshereSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019Krere({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019Krere`,
			);

			yield put(actions.fetchMpbzhrViti2019KrereSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019Liter({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019Liter`,
			);

			yield put(actions.fetchMpbzhrViti2019LiterSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019Pulavojse({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019Pulavojse`,
			);

			yield put(actions.fetchMpbzhrViti2019PulavojseSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019Thelleza({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019Thelleza`,
			);

			yield put(actions.fetchMpbzhrViti2019ThellezaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},

	*fetchMpbzhrViti2019HaF({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019HaF`,
			);

			yield put(actions.fetchMpbzhrViti2019HaFSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019KoshereF({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019KoshereF`,
			);

			yield put(actions.fetchMpbzhrViti2019KoshereFSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019KrereF({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019KrereF`,
			);

			yield put(actions.fetchMpbzhrViti2019KrereFSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019LiterF({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019LiterF`,
			);

			yield put(actions.fetchMpbzhrViti2019LiterFSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019PulavojseF({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019PulavojseF`,
			);

			yield put(actions.fetchMpbzhrViti2019PulavojseFSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019ThellezaF({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019ThellezaF`,
			);

			yield put(actions.fetchMpbzhrViti2019ThellezaFSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},

	*fetchMpbzhrViti2019HaM({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019HaM`,
			);

			yield put(actions.fetchMpbzhrViti2019HaMSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019KoshereM({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019KoshereM`,
			);

			yield put(actions.fetchMpbzhrViti2019KoshereMSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019KrereM({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019KrereM`,
			);

			yield put(actions.fetchMpbzhrViti2019KrereMSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019LiterM({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019LiterM`,
			);

			yield put(actions.fetchMpbzhrViti2019LiterMSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019PulavojseM({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019PulavojseM`,
			);

			yield put(actions.fetchMpbzhrViti2019PulavojseMSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMpbzhrViti2019ThellezaM({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mpbzhrViti2019ThellezaM`,
			);

			yield put(actions.fetchMpbzhrViti2019ThellezaMSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_MPBZHR_MASA_SHUMA_PAGUAR, sagas.fetchMpbzhrMasaShumaPaguar);
	yield takeLatest(FETCH_MPBZHR_VITI_HA, sagas.fetchMpbzhrVitiHa);
	yield takeLatest(FETCH_MPBZHR_VITI_KOSHERE, sagas.fetchMpbzhrVitiKoshere);
	yield takeLatest(FETCH_MPBZHR_VITI_KRERE, sagas.fetchMpbzhrVitiKrere);
	yield takeLatest(FETCH_MPBZHR_VITI_LITER, sagas.fetchMpbzhrVitiLiter);
	yield takeLatest(FETCH_MPBZHR_VITI_PULAVOJSE, sagas.fetchMpbzhrVitiPulavojse);
	yield takeLatest(FETCH_MPBZHR_VITI_THELLEZA, sagas.fetchMpbzhrVitiThelleza);

	yield takeLatest(FETCH_MPBZHR_VITI_2019_HA, sagas.fetchMpbzhrViti2019Ha);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_KOSHERE, sagas.fetchMpbzhrViti2019Koshere);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_KRERE, sagas.fetchMpbzhrViti2019Krere);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_LITER, sagas.fetchMpbzhrViti2019Liter);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_PULAVOJSE, sagas.fetchMpbzhrViti2019Pulavojse);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_THELLEZA, sagas.fetchMpbzhrViti2019Thelleza);

	yield takeLatest(FETCH_MPBZHR_VITI_2019_HA_F, sagas.fetchMpbzhrViti2019HaF);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_KOSHERE_F, sagas.fetchMpbzhrViti2019KoshereF);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_KRERE_F, sagas.fetchMpbzhrViti2019KrereF);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_LITER_F, sagas.fetchMpbzhrViti2019LiterF);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_PULAVOJSE_F, sagas.fetchMpbzhrViti2019PulavojseF);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_THELLEZA_F, sagas.fetchMpbzhrViti2019ThellezaF);

	yield takeLatest(FETCH_MPBZHR_VITI_2019_HA_M, sagas.fetchMpbzhrViti2019HaM);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_KOSHERE_M, sagas.fetchMpbzhrViti2019KoshereM);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_KRERE_M, sagas.fetchMpbzhrViti2019KrereM);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_LITER_M, sagas.fetchMpbzhrViti2019LiterM);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_PULAVOJSE_M, sagas.fetchMpbzhrViti2019PulavojseM);
	yield takeLatest(FETCH_MPBZHR_VITI_2019_THELLEZA_M, sagas.fetchMpbzhrViti2019ThellezaM);
};
