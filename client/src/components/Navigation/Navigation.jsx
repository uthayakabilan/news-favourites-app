import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-actions-container">
        <div className="featured-actions">
          <h3>Featured</h3>
        </div>
        <div className="seperator"></div>
        <div className="saved-actions">
          <h3>Saved</h3>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
