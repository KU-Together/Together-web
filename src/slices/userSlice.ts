import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserId } from "constants/types";
import { URLS } from "constants/urls";
import { RootState } from "store";

interface UserState {
  state: "";
  value: User | null;
}

const initialState: UserState = {
  state: "",
  value: null,
};

export const getUser = createAsyncThunk(
  "user/get",
  async (userId: UserId): Promise<User> => {
    const response = await fetch(URLS.together + `user/${userId}`);
    const user = await response.json();
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    });
  },
});

export const {} = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
