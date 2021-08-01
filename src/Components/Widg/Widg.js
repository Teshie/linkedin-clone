import Info from "@material-ui/icons/Info";
import React from "react";
import "./Widg.css";
import { FiberManualRecord } from "@material-ui/icons";
const Widg = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="header__widgets">
        <h2>Linkedin News latest</h2>
        <Info />
      </div>
    </div>
  );
};

export default Widg;
