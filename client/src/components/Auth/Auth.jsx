import React, { useState } from "react";
import "./Auth.css";
import githubLogo from "../../assets/logos/icons8-github.svg";
import { isEmailValid, isPasswordValid } from "../../utils/authUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  authError,
  loginAction,
  signupAction,
} from "../../features/userSlice/userSlice";
const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  // const [isError, setIsError] = useState({ state: false, message: "" });
  const isError = useSelector((state) => state.user.error);
  const initialAuthData = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [authData, setAuthData] = useState(initialAuthData);
  const handleAuthChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuthSubmit = () => {
    if (isEmailValid(authData.email)) {
      dispatch(authError({ state: false, message: "" }));
      if (isLogin) {
        dispatch(authError({ state: false, message: "" }));
        if (isPasswordValid(authData.password)) {
          dispatch(authError({ state: false, message: "" }));
          // LOgin controller
          const { confirmPassword, ...others } = authData;
          dispatch(loginAction(others));
        } else {
          dispatch(authError({ state: true, message: "Weak password" }));
        }
      } else {
        if (authData.confirmPassword === authData.password) {
          dispatch(authError({ state: false, message: "" }));
          // Signup controller
          const { confirmPassword, ...others } = authData;
          dispatch(signupAction(others));
        } else {
          dispatch(
            authError({
              state: true,
              message: "Password and confirm password does not match",
            })
          );
        }
      }
    } else {
      dispatch(authError({ state: true, message: "Invalid email" }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-inner-container">
        <div className="auth-contents">
          <div className="auth-headings">
            <h3>Welcome to the News App</h3>
            <p>Please enter your {isLogin ? "Login" : "Sign up"} details</p>
          </div>
          <div className="oauth-container">
            <img src={githubLogo} alt="github logo" />
            <p>{isLogin ? "Login" : "Sign up"} with Github</p>
          </div>
          <div className="auth-dividor">------ or ------</div>
          <div className="auth-input">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={authData.email}
              onChange={handleAuthChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={authData.password}
              onChange={handleAuthChange}
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={authData.confirmPassword}
                onChange={handleAuthChange}
              />
            )}
            {isError.state && (
              <div className="auth-error">
                <p>*{isError.message}</p>
              </div>
            )}
          </div>
          {isLogin && (
            <div className="auth-actions">
              <p>Forgot Password ? </p>
            </div>
          )}
          <div
            className={
              isError.state ? "auth-button error-button" : "auth-button"
            }
            onClick={handleAuthSubmit}
          >
            <button>{isLogin ? "Login" : "Sign up"}</button>
          </div>
          <div
            className="auth-switch"
            onClick={() => {
              setIsLogin((prev) => !prev);
              setAuthData((prev) => ({
                ...prev,
                confirmPassword: "",
                password: "",
              }));
            }}
          >
            <p>
              {isLogin
                ? "New to News app ? Signup here"
                : "Already have an account ? Login here"}
            </p>
          </div>
        </div>
      </div>
      <div className="auth-banner"></div>
    </div>
  );
};

export default Auth;
