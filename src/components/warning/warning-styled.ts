import { Inpt } from "../form/form-styled";
import styled from "styled-components";

interface WarningProps {
	readonly display: string;
}
export const Warning = styled(Inpt)<WarningProps>`
	margin-bottom: 10px;
	border: 1px solid rgba(226, 111, 111, 1);
	background: rgba(245, 233, 233, 1);
	display: ${(props) => (props.display ? "flex" : "none")};
	align-items: center;
	gap: 15px;
	.symbol {
		color: rgba(238, 101, 101, 1);
		background-color: rgba(255, 200, 200, 1);
		width: 20px;
		line-height: 20px;
		border-radius: 100%;
		text-align: center;
	}
`;

export const WarningText = styled.span`
	font-size: 14px;
`;
