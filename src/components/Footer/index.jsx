import React from "react";
import Logo from "@img/svg/logo.svg";
import SELogo from "@img/svg/se_logo.svg";
import MDALogo from "@img/svg/mda_logo.svg";
import "./index.scss";

function Footer() {
	return (
		<footer>
			<div className="main">
				<div className="main_first">
					<img src={Logo} alt="logo" />
					<div className="main_first__info">
						<p className="main_first__info__address">Adresa</p>
						<p>Bill Clinton Boulevard, 5/8 D, 10000 Pristina,</p>
						<p> Kosovo.</p>
					</div>
				</div>
				<p className="copyright">© 2021, MDA</p>
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
