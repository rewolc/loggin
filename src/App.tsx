import { useEffect } from "react";
import { userSlice } from "./redux/userReducer/user-reducer";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "./redux/actions";

import LoginPage from "./pages/login/login";
import EnteredPage from "./pages/entered/entered";
import RegisterPage from "./pages/register/register";
import ChangePasswordPage from "./pages/change-password/change-password";

import { AppWraper } from "./styled-components/App-styled";
import { HeaderText } from "./styled-components/common-styles";

import { Storage } from "./local-storage/local-storage";
import { Routes, Route } from "react-router";

import CustomizedMenu from "./components/menu/menu";

const App: React.FC = () => {
	
	const navigate = useNavigate();
	const location = useLocation().pathname;
	const dispatch = useAppDispatch();

	const { addUser } = userSlice.actions;
	const { id } = useAppSelector((state) => state.userReducer);

	useEffect(() => {
		navigate("/login");
		if (Storage.length) {
			dispatch(
				addUser({
					mail: Storage.getItem("mail")!,
					password: Storage.getItem("password")!,
					id: Storage.getItem("id")!,
				})
			);
		}
	}, []);

	useEffect(() => {
		if (id) {
			(location === "/login" || location === "/register") && navigate("/entered");
		} else {
			(location === "/entered" || location === "/changepassword") && navigate("/login");
		}
	});

	return (
		<AppWraper>
			<HeaderText>
				<div>
					<CustomizedMenu />
				</div>
				{location === "/login" ? "Loggin." : location === "/register" ? "Register." : "Logged."}
			</HeaderText>
			<Routes>
				<Route path="/changepassword" element={<ChangePasswordPage key={"changePassword"} />} />
				<Route path="/login" element={<LoginPage key={"login"} />} />
				<Route path="/entered" element={<EnteredPage key={"entered"} />} />
				<Route path="/register" element={<RegisterPage key={"register"} />} />
			</Routes>
		</AppWraper>
	);
};

export default App;
