import { FormComponent } from "../../components/form/form";
import { WarningComponent } from "../../components/warning/warning";
import { Wraper, Button, UnderButtonText } from "../../styled-components/common-styles";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { FormData } from "../../types/types";
const ChangePasswordPage: React.FC<any> = () => {
	const navigate = useNavigate();
	const [formErrors, newError] = useState<string>();
	const [isBtnActive, changeBtnActive] = useState(true);

	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onChange",
	});

	const onSubmit = handleSubmit(async (data) => {
		changeBtnActive(!isBtnActive);
		((isBtnActive) => changeBtnActive(!isBtnActive))();
	});

	const changePasswordForm = ["password", "newPassword", "passwordRepeat"];
	return (
		<Wraper as="form" onSubmit={onSubmit}>
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
