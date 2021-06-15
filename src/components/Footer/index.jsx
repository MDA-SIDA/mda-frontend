import React from "react";
import Logo from "@img/svg/logo.svg";
import SELogo from "@img/svg/se_logo.svg";
import MDALogo from "@img/svg/mda_logo.svg";
import "./index.scss";

function Footer() {
	return (
		<footer>
			<div className="main">
				<img src={Logo} alt="logo" />
			</div>
			<div className="collab">
				<p>Co-founded by:</p>
				<img src={SELogo} alt="Sweden Logo" />
				<img src={MDALogo} alt="MDA logo" />
			</div>
		</footer>
	);
}

export default Footer;
