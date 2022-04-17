import axios from "axios";

import { FormComponent } from "../../components/form/form";
import { WarningComponent } from "../../components/warning/warning";
import { Wraper, Button, UnderButtonText } from "../../styled-components/common-styles";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { FormData } from "../../types/types";

const RegisterPage: React.FC = () => {
	const registerForm = ["login", "password", "passwordRepeat"];

	const navigate = useNavigate();
	const [formErrors, newError] = useState<string[]>([]);
	const [isBtnActive, changeBtnActive] = useState(true);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onChange",
	});

	const newUser = async (login: string, password: string) => {
		try {
			await axios.post("https://625ac5f3398f3bc782a612de.mockapi.io/users", {
				mail: `${login}`,
				password: `${password}`,
			});
		} catch (err) {
			newError([...formErrors, "Ошибка сервера"]);
		}
	};

	const onSubmit = handleSubmit(async (data) => {
		changeBtnActive(!isBtnActive);

		const collectedErrors = [];

		!data.login.includes("@") && collectedErrors.push("Некорректно введен Email");

		data.password.toLowerCase() === data.password &&
			collectedErrors.push("Пароль должен содержать как минимум одну заглавную букву");

		data.password !== data.passwordRepeat && collectedErrors.push("Пароли не совпадают");

		newError(collectedErrors);

		if (!collectedErrors[0]) {
			await newUser(data.login, data.password);
			navigate("/");
		}

		((isBtnActive) => changeBtnActive(!isBtnActive))();
	});

	return (
		<Wraper as="form" onSubmit={onSubmit}>
			{formErrors.map((err) => (
				<WarningComponent key={err.length} text={err} />
			))}
			{registerForm.map((form, indx) => (
				<FormComponent
					register={register}
					form={form}
					key={indx}
					message={
						form === "login"
							? errors.login?.message
							: form === "password"
							? errors.password?.message
							: errors.passwordRepeat?.message
					}
				/>
			))}
			<Button value="Зарегестрироваться" active={isBtnActive} disabled={!isBtnActive} />

			<UnderButtonText>
				Есть аккаунт? <span onClick={() => navigate("/")}> Войти </span>
			</UnderButtonText>
		</Wraper>
	);
};

export default RegisterPage;
