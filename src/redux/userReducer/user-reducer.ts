import { IUserState } from "../../types/types";

import { changeUserPassword } from "./user-actions";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
		removeUser(state) {
			return initialState;
		},
	},
	extraReducers: {
		[changeUserPassword.fulfilled.type]: (state, action: PayloadAction<IUserState>) => {
			return action.payload;
		},
	},
});

export default userSlice.reducer;
