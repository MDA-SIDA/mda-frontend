import * as yup from "yup";
export const industryInputs = {
	arbk: {
		validationSchema: yup.object().shape({
			companyName: yup.string().label("Company Name").required().nullable(),
		}),
		inputs: [
			{
				type: "text",
				placeholder: "Numri biznesit",
				name: "nrbiznesit",
				label: "Numri biznesit",
			},
			{
				type: "text",
				placeholder: "Nr B",
				name: "nrb",
				label: "Nr B",
			},
			{
				type: "text",
				placeholder: "Emri i biznesit",
				name: "emribiznesit",
				label: "Emri i biznesit",
			},
			{
				type: "text",
				placeholder: "Lloji i biznesit",
				name: "llojibiznesit",
				label: "Lloji i biznesit",
			},
			{
				type: "text",
				placeholder: "Aktiv name2",
				name: "aktivname2",
				label: "Aktiv name2",
			},
			{
				type: "text",
				placeholder: "Aktiv name2 pershkrimi",
				name: "aktivname2pershkrimi",
				label: "Aktiv name2 pershkrimi",
			},
			{
				type: "text",
				placeholder: "Aktiv name2 pershkrimi",
				name: "aktivname2pershkrimi",
				label: "Aktiv name2 pershkrimi",
			},
			{
				type: "text",
				placeholder: "Sektori",
				name: "sektori",
				label: "Sektori",
			},
			{
				type: "text",
				placeholder: "Nr punetoreve",
				name: "nrpunetoreve",
				label: "Nr punetoreve",
			},
			{
				type: "text",
				placeholder: "Madhesia",
				name: "madhesia",
				label: "Madhesia",
			},
			{
				type: "text",
				placeholder: "Gjinia",
				name: "gjinia",
				label: "Gjinia",
			},
			{
				type: "text",
				placeholder: "Vendbanimi Id",
				name: "vendbanimiid",
				label: "Vendbanimi Id",
			},
			{
				type: "text",
				placeholder: "Statusi i biznesit",
				name: "statusiibiznesit",
				label: "Statusi i biznesit",
			},
			{
				type: "text",
				placeholder: "Viti",
				name: "viti",
				label: "Viti",
			},
			{
				type: "text",
				placeholder: "Muaji",
				name: "muaji",
				label: "Muaji",
			},
			{
				type: "text",
				placeholder: "Is deleted",
				name: "isdeleted",
				label: "Is deleted",
			},
		],
	},
	universitetiiprishtines: {
		validationSchema: yup.object().shape({
			companyName: yup.string().label("Test").required().nullable(),
		}),
		inputs: [
			{
				type: "text",
				placeholder: "Fakulteti",
				name: "Fakulteti",
				label: "Fakulteti",
			},
			{
				type: "text",
				placeholder: "Departamenti",
				name: "Departamenti",
				label: "Departamenti",
			},

			{
				type: "text",
				placeholder: "Statusi",
				name: "statusi",
				label: "Statusi",
			},
			{
				type: "text",
				placeholder: "Niveli",
				name: "niveli",
				label: "Niveli",
			},
			{
				type: "radio",
				placeholder: "",
				name: "gjinia",
				label: "Gjinia",
			},
			{
				type: "text",
				placeholder: "Komuna Id",
				name: "komunaid",
				label: "Komuna Id",
			},
			{
				type: "text",
				placeholder: "Vendlindja",
				name: "vendlindja",
				label: "Vendlindja",
			},
			{
				type: "text",
				placeholder: "Komuna e vendbanimit id",
				name: "komunavendbanimitid",
				label: "Komuna e Vendbanimit Id",
			},
			{
				type: "text",
				placeholder: "Kombi",
				name: "kombi",
				label: "Kombi",
			},
			{
				type: "text",
				placeholder: "Shtetsia",
				name: "shtetsia",
				label: "Shtetsia",
			},
			{
				type: "text",
				placeholder: "Data e diplomimit",
				name: "datadiplomimit",
				label: "Data e diplomimit",
			},
			{
				type: "text",
				placeholder: "Mesatarja",
				name: "mesatarja",
				label: "Mesatarja",
			},
			{
				type: "radio",
				placeholder: "Is deleted",
				name: "isdeleted",
				label: "Is deleted",
			},
			{
				type: "text",
				placeholder: "Fakulteti id",
				name: "fakultetiid",
				label: "Fakulteti id",
			},
		],
	},
	mpbzhr_grante: {
		inputs: [
			{
				type: "text",
				placeholder: "Masa",
				name: "masa",
				label: "Masa",
			},
			{
				type: "text",
				placeholder: "Viti",
				name: "viti",
				label: "Viti",
			},
			{
				type: "text",
				placeholder: "Komuna id",
				name: "komunaid",
				label: "Komuna id",
			},
			{
				type: "text",
				placeholder: "Shuma",
				name: "shuma",
				label: "Shuma",
			},
			{
				type: "radio",
				placeholder: "Gjinia",
				name: "gjinia",
				label: "Gjinia",
			},
			{
				type: "text",
				placeholder: "Is Deleted",
				name: "isdeleted",
				label: "Is Deleted",
			},
		],
	},
	mpbzhr_fadn: {
		inputs: [
			{
				type: "text",
				placeholder: "Variabla",
				name: "variabla",
				label: "Variabla",
			},
			{
				type: "text",
				placeholder: "Pershkrimi",
				name: "pershkrimi",
				label: "Pershkrimi",
			},
			{
				type: "text",
				placeholder: "Viti",
				name: "viti",
				label: "Viti",
			},
			{
				type: "text",
				placeholder: "Sasia",
				name: "sasia",
				label: "Sasia",
			},
			{
				type: "text",
				placeholder: "Regjioni id",
				name: "regjioniid",
				label: "Regjioni id",
			},
			{
				type: "text",
				placeholder: "Is deleted",
				name: "isdeleted",
				label: "Is deleted",
			},
		],
	},
	rruget: {
		inputs: [
			{
				type: "text",
				placeholder: "Komuna id",
				name: "komunaid",
				label: "Komuna id",
			},
			{
				type: "text",
				placeholder: "Vendbanimi",
				name: "vendbanimi",
				label: "Vendbanimi",
			},
			{
				type: "text",
				placeholder: "Kodi i rruges",
				name: "kodiirruges",
				label: "Kodi i rruges",
			},
			{
				type: "text",
				placeholder: "Pst",
				name: "pst",
				label: "Pst",
			},
			{
				type: "text",
				placeholder: "Emri i rruges",
				name: "emriirruges",
				label: "Emri i rruges",
			},
			{
				type: "text",
				placeholder: "Gjithsej segmente",
				name: "gjithsejsegmente",
				label: "Gjithsej segmente",
			},
			{
				type: "text",
				placeholder: "Gjithsej gjatesia e segmenteve",
				name: "gjithsejgjatesiasegmenteve",
				label: "Gjithsej gjatesia e segmenteve",
			},
		],
	},
};
