import styled from "styled-components";
import { AppWraper } from "./App-styled";
import { Inpt } from "../components/form/form-styled";

export const HeaderText = styled.h1`
	cursor: pointer;
	color: black;
	margin: 40px 20px 0 auto;
	font-size: 64px;
	font-weight: 700;
`;

export const Wraper = styled(AppWraper)`
	margin-top: 70px;
	justify-content: center;
	align-items: flex-start;
	margin-bottom: 40px;
	position: relative;
	@media (min-width: 1280px) {
		width: 700px;
	}
	@media (max-width: 1280px) {
		width: 640px;
	}

	@media (max-width: 900px) {
		width: 450px;
	}
	@media (max-width: 600px) {
		width: 300px;
	}
	@media (max-width: 400px) {
		width: 200px;
	}
`;

/// BUTTON

interface ButtonProps {
	readonly active: boolean;
}

export const Button = styled(Inpt).attrs({
	type: "submit",
})<ButtonProps>`
	background-color: ${(props) => (props.active ? "#4a67ff" : "#606a9f;")};
	padding: 0;
	text-align: center;
	color: white;
	font-size: 18px;
	font-weight: 700;
	margin-top: 40px;
	cursor: ${(props) => (props.active ? "pointer" : "default")};

	&:hover {
		${(props) => (props.active ? "background-color : #4a67ff" : "background-color : #606a9f")};
	}
`;

export const UnderButtonText = styled.div`
	width: 100%;
	margin-top: 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	span {
		cursor: pointer;
		color: #4a67ff;
		padding-left: 5px;
		transition: all 0.7s;
		&:hover {
			color: #d0a900;
		}
	}
`;
