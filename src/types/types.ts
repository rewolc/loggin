export type FormData = {
	login: string;
	password: string;
	passwordRepeat?: string;
	newPassword?: string;
};

export interface IUserState {
	mail: string | undefined;
	password: string | undefined;
	id: string | undefined;
}
