import styled from "styled-components";

///CheckBox

export const LoginCheckbox = styled.input.attrs({ type: "checkbox" })`
	width: 20px;
	height: 20px;
	border-radius: 4px;
`;
export const LoginLabel = styled.label`
	margin-top: 20px;
	align-items: center;
	display: flex;
	gap: 13px;
`;

export const LoginLabelText = styled.span`
	font-size: 14px;
`;
