import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../api/authApi.js";
const initialState = {
  error: {
    state: false,
    message: "",
  },
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = { state: false, message: "" };
      state.user = null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.error = { state: false, message: "" };
      state.user = action.payload;
    },
    authError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
    authLogout: (state) => {
      state.loading = false;
      state.error = { state: false, message: "" };
      state.user = null;
    },
  },
});

export const loginAction = (authData) => async (dispatch) => {
  dispatch(authStart());
  try {
    const { data } = await API.loginHandler(authData);
    dispatch(authSuccess(data.data));
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      console.log(error);
      dispatch(authError({ state: true, message: error.message }));
    } else {
      dispatch(
        authError({ state: true, message: error.response.data.message })
      );
    }
  }
};

export const signupAction = (authData) => async (dispatch) => {
  dispatch(authStart());
  try {
    const { data } = await API.signUpHandler(authData);
    dispatch(authSuccess(data.data));
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      console.log(error);
      dispatch(authError({ state: true, message: error.message }));
    } else {
      dispatch(
        authError({ state: true, message: error.response.data.message })
      );
    }
  }
};

export const logOutAction = () => async (dispatch) => {
  try {
    await API.logOutHandler();
    dispatch(authLogout());
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      console.log(error);
      dispatch(authError({ state: true, message: error.message }));
    } else {
      dispatch(
        authError({ state: true, message: error.response.data.message })
      );
    }
  }
};

export const { authError, authStart, authSuccess, authLogout } =
  userSlice.actions;
export default userSlice.reducer;
