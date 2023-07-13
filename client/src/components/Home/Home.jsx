import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Home;
