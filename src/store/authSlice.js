import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status : false,
  userData : null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login : (state, action) => {
        state.status = true,
        state.userData = action.payload.userData
    },
    logout : (state) => {
        state.userData = false,
        state.userData = null
    }
  },
});

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;
