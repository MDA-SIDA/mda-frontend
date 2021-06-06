import jwtDecode from "jwt-decode";

import Logger from "@utils/logger";

const logger = new Logger("GetCurrentUser");
// eslint-disable-next-line max-statements
export const getCurrentUser = () => {
	try {
		if (localStorage.getItem("token")) {
			const token = localStorage.getItem("token");
			const decoded = jwtDecode(token);
			if (new Date().getTime() / 1000 > decoded.exp) {
				localStorage.removeItem("token");
				return null;
			}
			return decoded;
		}
		return null;
	} catch (error) {
		if (!window.location.pathname.includes("/auth")) {
			localStorage.removeItem("token");
		}
		logger.error(error);
		return null;
	}
};
