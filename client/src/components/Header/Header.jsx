import React from "react";
import "./Header.css";
import newsLogo from "../../assets/logos/icons8-news.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../features/userSlice/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log(`Logout button clicked`);
    dispatch(logOutAction());
  };
  return (
    <div className="header-container">
      <div className="news-logo">
        <img src={newsLogo} alt="news app logo" />
        <p>News App</p>
      </div>
      <div className="user-actions">
        <p>Hi {user.username}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
