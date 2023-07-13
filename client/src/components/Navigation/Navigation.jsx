import React from "react";
import "./Navigation.css";
import { categories } from "../../utils/data";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-actions-container">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <div className="featured-actions">
                <h3>
                  <NavLink to={`/feed/${category}`}>{category}</NavLink>
                </h3>
              </div>
              <div className="seperator"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
