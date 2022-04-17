import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../types/types";
import { changeUserPassword } from "./user-actions";
const initialState: IUserState = {
	id: 0,
	mail: "",
	password: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<IUserState>) {
			return action.payload;
		},
	},
	extraReducers: {
		[changeUserPassword.fulfilled.type]: (state, action: PayloadAction<IUserState>) => {
			return action.payload;
		},
	},
});

export default userSlice.reducer;
