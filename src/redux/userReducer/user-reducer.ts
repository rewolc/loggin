import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../types/types";

const initialState: IUserState = {
	id: "",
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
	extraReducers: {},
});

export default userSlice.reducer;
