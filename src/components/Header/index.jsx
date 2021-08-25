import React, {useState} from "react";
import Logo from "@img/svg/logo.svg";
import "./index.scss";

function Header() {
	const [activeLang, setActiveLang] = useState("SQ");
	return (
		<header>
			<img src={Logo} alt="logo" />
			<p className="language">
				<span
					onClick={() => setActiveLang("SQ")}
					className={activeLang === "SQ" ? "active" : null}
				>
					SQ
				</span>{" "}
				|{" "}
				<span
					onClick={() => setActiveLang("EN")}
					className={activeLang === "EN" ? "active" : null}
				>
					EN
				</span>{" "}
				|{" "}
				<span
					onClick={() => setActiveLang("SRB")}
					className={activeLang === "SRB" ? "active" : null}
				>
					SRB
				</span>
			</p>
		</header>
	);
}

export default Header;
