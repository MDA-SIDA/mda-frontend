import React, {useState} from "react";
import Logo from "@img/svg/logo.svg";
import "./index.scss";
import {useTranslation} from "react-i18next";

function Header() {
	const [activeLang, setActiveLang] = useState("sq");
	const {i18n} = useTranslation();

	return (
		<header>
			<img src={Logo} alt="logo" />
			<p className="language">
				<span
					onClick={() => {
						setActiveLang("sq");
						i18n.changeLanguage("sq");
					}}
					className={activeLang === "sq" ? "active" : null}
				>
					SQ
				</span>{" "}
				|{" "}
				<span
					onClick={() => {
						setActiveLang("en");
						i18n.changeLanguage("en");
					}}
					className={activeLang === "en" ? "active" : null}
				>
					EN
				</span>{" "}
				|{" "}
				<span
					onClick={() => {
						setActiveLang("srb");
						i18n.changeLanguage("srb");
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
