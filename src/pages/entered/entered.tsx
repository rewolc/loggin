import { EnteredWraper, EnteredText, EnteredButton } from "./entered-styled";

import { useNavigate } from "react-router";

import { useAppSelector } from "../../redux/actions";

import { Storage } from "../../local-storage/local-storage";

const EnteredPage: React.FC = () => {
	const navigate = useNavigate();
	const { mail } = useAppSelector((state) => state.userReducer);
	return (
		<EnteredWraper>
			<EnteredText>
				Здравствуйте, <span> {mail} </span>
			</EnteredText>
			<EnteredButton
				value="Выйти"
				onClick={() => {
					navigate("/login");
					Storage.clear();
				}}
			/>
		</EnteredWraper>
	);
};

export default EnteredPage;
