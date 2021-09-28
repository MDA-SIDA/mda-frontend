import React, {useState} from "react";
import Logo from "@img/svg/logo.svg";
import "./index.scss";
import {useTranslation} from "react-i18next";

function Header() {
	const [activeLang, setActiveLang] = useState("sq");
	const {i18n} = useTranslation();

	const changeLanguageHandler = (lang) => {
		const languageValue = lang;
		i18n.changeLanguage(languageValue);
	};

	return (
		<header>
			<img src={Logo} alt="logo" />
			<p className="language">
				<span
					onClick={() => {
						setActiveLang("sq");
						changeLanguageHandler("sq");
					}}
					className={activeLang === "sq" ? "active" : null}
				>
					SQ
				</span>{" "}
				|{" "}
				<span
					onClick={() => {
						setActiveLang("en");
						changeLanguageHandler("en");
					}}
					className={activeLang === "en" ? "active" : null}
				>
					EN
				</span>{" "}
				|{" "}
				<span
					onClick={() => {
						setActiveLang("srb");
						changeLanguageHandler("srb");
					}}
					className={activeLang === "srb" ? "active" : null}
				>
					SRB
				</span>
			</p>
		</header>
	);
}

export default Header;
