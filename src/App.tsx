import { Routes, Route } from "react-router";

import LoginPage from "./pages/login/login";
import EnteredPage from "./pages/entered/entered";
import RegisterPage from "./pages/register/register";
import ChangePasswordPage from "./pages/change-password/change-password";

import { AppWraper } from "./styled-components/App-styled";
import { HeaderText } from "./styled-components/common-styles";

import { useLocation } from "react-router";

const App: React.FC = () => {
	const location = useLocation().pathname;
	return (
		<AppWraper>
			<HeaderText>
				{location === "/" ? "Loggin." : location === "/register" ? "Register." : "Logged."}
			</HeaderText>
			<Routes>
				<Route path="/changePassword" element={<ChangePasswordPage key={"changePassword"} />} />
				<Route path="/" element={<LoginPage key={"login"} />} />
				<Route path="/entered" element={<EnteredPage key={"entered"} />} />
				<Route path="/register" element={<RegisterPage key={"register"} />} />
			</Routes>
		</AppWraper>
	);
};

export default App;
