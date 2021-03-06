import axios from "axios";

import { FormData } from "../../types/types";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

import { userSlice } from "../../redux/userReducer/user-reducer";
import { useAppDispatch } from "../../redux/actions";

import { FormComponent } from "../../components/form/form";
import { WarningComponent } from "../../components/warning/warning";
import { Wraper, Button, UnderButtonText } from "../../styled-components/common-styles";

import { LoginCheckbox, LoginLabel, LoginLabelText } from "./login-styled";
import { IUserState } from "../../types/types";

const LoginPage = () => {

	const Storage = window.localStorage;
	const formsLogin = ["login", "password"];

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { addUser } = userSlice.actions;

	const [remember, changeRemember] = useState(false);
	const [formErrors, newError] = useState<string>();
	const [isBtnActive, changeBtnActive] = useState(true);

	const findUser = async (mail: string) => {
		try {
			const response = await axios.get<IUserState[]>(
				"https://625ac5f3398f3bc782a612de.mockapi.io/users"
			);
			return response.data.find((user) => user.mail === mail);
		} catch (err) {
			newError("Ошибка сервера");
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onChange",
	});

	const onSubmit = handleSubmit(async (data) => {
		changeBtnActive(!isBtnActive);

		const isUser: IUserState | undefined = await findUser(data.login);

		if (isUser) {
			if (isUser.password === data.password) {
				dispatch(addUser(isUser));
				if (remember) {
					Storage.setItem("mail", isUser.mail);
					Storage.setItem("password", isUser.password);
					Storage.setItem("id", isUser.id);
				}
				navigate("/entered");
			} else {
				newError("Неверный пароль");
			}
		} else {
			newError("Пользователь не найден");
		}

		((isBtnActive) => changeBtnActive(!isBtnActive))();
	});

	return (
		<>
			<Wraper as="form" onSubmit={onSubmit}>
				{formErrors && <WarningComponent key={formErrors.length} text={formErrors} />}
				{formsLogin.map((form, indx) => (
					<FormComponent
						register={register}
						form={form}
						key={indx}
						message={form === "login" ? errors.login?.message : errors.password?.message}
					/>
				))}

				<LoginLabel>
					<LoginCheckbox onClick={() => changeRemember(!remember)} />
					<LoginLabelText>Запомнить</LoginLabelText>
				</LoginLabel>

				<Button value="Войти" active={isBtnActive} disabled={!isBtnActive} />
				<UnderButtonText>
					Еще нет аккаунта?<span onClick={() => navigate("/register")}> Создать аккаунт </span>
				</UnderButtonText>
			</Wraper>
		</>
	);
};

export default LoginPage;
