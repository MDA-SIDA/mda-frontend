import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// Importing translation files
import translationSQ from "./translation/sq.json";
import translationEN from "./translation/en.json";
import translationSRB from "./translation/srb.json";

// Creating object with the variables of imported translation files
const resources = {
	sq: {
		translation: translationSQ,
	},
	en: {
		translation: translationEN,
	},
	srb: {
		translation: translationSRB,
	},
};

// i18N Initialization
i18n.use(initReactI18next).init({
	resources,
	lng: "sq", // default language
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
