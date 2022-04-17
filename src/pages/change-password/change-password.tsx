import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/actions";
import { useAppSelector } from "../../redux/actions";

import { FormComponent } from "../../components/form/form";
import { WarningComponent } from "../../components/warning/warning";
import { Wraper, Button } from "../../styled-components/common-styles";

import { changeUserPassword } from "../../redux/userReducer/user-actions";

import { FormData } from "../../types/types";


const ChangePasswordPage: React.FC<any> = () => {

	const changePasswordForm = ["password", "newPassword", "passwordRepeat"];

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [changePasswordErrors, newError] = useState<string>();
	const [isBtnActive, changeBtnActive] = useState(true);
	
	const { password, id } = useAppSelector((state) => state.userReducer);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onChange",
	});

	const onSubmit = handleSubmit(async (data) => {
		changeBtnActive(!isBtnActive);
		if (data.password === password) {
			if (data.newPassword === data.passwordRepeat) {
				dispatch(changeUserPassword({ password: data.newPassword, id }));
				navigate("/entered");
			} else if (data.newPassword!.toLowerCase() === data.newPassword) {
				newError("В новом пароле должа быть хотя бы 1 заглавная буква");
			} else {
				newError("Новые пароли не совпадают");
			}
		} else {
			newError("Старый пароль введен неверно");
		}

		((isBtnActive) => changeBtnActive(!isBtnActive))();
	});

	return (
		<Wraper as="form" onSubmit={onSubmit}>
			{changePasswordErrors && (
				<WarningComponent key={changePasswordErrors.length} text={changePasswordErrors} />
			)}
			{changePasswordForm.map((form, indx) => (
				<FormComponent
					register={register}
					form={form}
					key={indx}
					message={
						form === "password"
							? errors.password?.message
							: form === "passwordRepeat"
							? errors.passwordRepeat?.message
							: errors.newPassword?.message
					}
				/>
			))}
			<Button value="Изменить пароль" active={isBtnActive} disabled={!isBtnActive} />
		</Wraper>
	);
};

export default ChangePasswordPage;
