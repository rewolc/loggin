import { EnteredWraper, EnteredText, EnteredButton } from "./entered-styled";

import { useNavigate } from "react-router";

import { useAppSelector } from "../../redux/actions";

const EnteredPage: React.FC = () => {
	const navigate = useNavigate();
	const { mail } = useAppSelector((state) => state.userReducer);
	return (
		<EnteredWraper>
			<EnteredText>
				Здравствуйте, <span> {mail} </span>
			</EnteredText>
			<EnteredButton value="Выйти" onClick={() => navigate("/")} />
		</EnteredWraper>
	);
};

export default EnteredPage;
