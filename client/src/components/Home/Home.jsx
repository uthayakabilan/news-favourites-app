import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NewsList from "../NewsList/NewsList";
const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <NewsList />
    </div>
  );
};

export default Home;
