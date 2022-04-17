import axios from "axios";

import { FormData } from "../../types/types";

import { user } from "../../texts/texts";
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
	const formsLogin = ["login", "password"];

	const dispatch = useAppDispatch();
	const { addUser } = userSlice.actions;
	const navigate = useNavigate();
	const [formErrors, newError] = useState<string>();
	const [isBtnActive, changeBtnActive] = useState(true);

	const findUser = async (mail: string, password?: string) => {
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
					<LoginCheckbox />
					<LoginLabelText>Запомнить пароль</LoginLabelText>
				</LoginLabel>

				<Button value="Войти" active={isBtnActive} disabled={!isBtnActive} />
				<UnderButtonText>
					Еще нет аккаунта? <span onClick={() => navigate("/register")}> Регистрация </span>
				</UnderButtonText>
			</Wraper>
		</>
	);
};

export default LoginPage;
