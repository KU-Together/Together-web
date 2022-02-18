import { createSlice } from "@reduxjs/toolkit";
import { User } from "constants/types";
import { RootState } from "store";

interface UserState {
  state: "";
  value: User | null;
}

const initialState: UserState = {
  state: "",
  value: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
