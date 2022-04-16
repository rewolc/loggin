import { Inpt, UpperFormText, UnderFormText } from "./form-styled";

export const FormComponent: React.FC<{
	form: string;
	message?: string | undefined;
	register: Function;
}> = ({ form, register, message }) => {
	return (
		<>
			<UpperFormText>
				{form === "login" ? "Логин" : form === "password" ? "Пароль" : "Повторите пароль"}
			</UpperFormText>
			<Inpt
				filled={message}
				type={form === "login" ? "text" : "password"}
				{...register(form, {
					required: "Обязательное поле",
					minLength: { value: 4, message: "Введите минимум 4 символа" },
					maxLength: {
						value: form === "login" ? 50 : 10,
						message: "Максимальная длина - 10 символов",
					},
				})}
			/>
			<UnderFormText>{message}</UnderFormText>
		</>
	);
};


