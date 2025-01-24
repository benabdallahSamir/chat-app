import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "loading",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.status = true;
    },
    loginFailure(state, action) {
      state.status = false;
    },
    logout(state) {
      state.user = null;
      state.user = false;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
