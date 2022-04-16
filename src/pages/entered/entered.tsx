import { EnteredWraper, EnteredText, EnteredButton } from "./entered-styled";

import { useNavigate } from "react-router";

const EnteredPage: React.FC = () => {
	const navigate = useNavigate();
	return (
		<EnteredWraper>
			<EnteredText>
				Здравствуйте, <span> steve.jobs@example.com </span>
			</EnteredText>
			<EnteredButton value="Выйти" onClick={() => navigate("/")} />
		</EnteredWraper>
	);
};

export default EnteredPage;
