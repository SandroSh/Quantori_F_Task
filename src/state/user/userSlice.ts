import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string | ArrayBuffer | null;
  token: string;
  refreshToken: string;
}
export const initialState: User = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: null,
  token: "",
  refreshToken: "",
};
const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    },
  },
});
export const {createUser} = userSlice.actions;
export default userSlice.reducer;