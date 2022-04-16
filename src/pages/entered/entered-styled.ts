import styled from "styled-components";

import { AppWraper } from "../../styled-components/App-styled";
import { Inpt } from "../../components/form/form-styled";

export const EnteredWraper = styled(AppWraper)`
	margin-top: 342px;
`;

export const EnteredText = styled.p`
	margin: auto;
	span {
		font-weight: 700;
	}
	@media (min-width: 1280px) {
		font-size: 40px;
	}
	@media (max-width: 1280px) {
		font-size: 35px;
	}

	@media (max-width: 900px) {
		font-size: 30px;
	}
	@media (max-width: 600px) {
		font-size: 25px;
	}
	@media (max-width: 500px) {
		font-size: 20px;
	}
	@media (max-width: 400px) {
		font-size: 15px;
	}
`;

export const EnteredButton = styled(Inpt).attrs({
	type: "submit",
})`
	font-size: 18px;
	width: 200px;
	margin-top: 50px;
	padding: 0px;
	text-align: center;
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-color: rgb(220 220 220);
	}
`;

