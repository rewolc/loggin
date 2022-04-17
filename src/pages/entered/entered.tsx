import { userSlice } from "../../redux/userReducer/user-reducer";
import { useAppSelector, useAppDispatch } from "../../redux/actions";

import { useNavigate } from "react-router";

import { Storage } from "../../local-storage/local-storage";

import { EnteredWraper, EnteredText, EnteredButton } from "./entered-styled";

const EnteredPage: React.FC = () => {

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	
	const { removeUser } = userSlice.actions;
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
					dispatch(removeUser());
					Storage.clear();
				}}
			/>
		</EnteredWraper>
	);
};

export default EnteredPage;
