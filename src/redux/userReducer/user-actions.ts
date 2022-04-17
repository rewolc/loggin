import axios from "axios";
import { IUserState } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IUserInfo {
	password: string| undefined;
	id: number| undefined;
}

export const changeUserPassword = createAsyncThunk("user/changeUserPassword", async (userInfo : IUserInfo) => {
	try {
		const response = await axios.put<{ password: string; id: number }>(
			`https://625ac5f3398f3bc782a612de.mockapi.io/users/${userInfo.id}`,
			{
				password: `${userInfo.password}`,
			}
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
});
