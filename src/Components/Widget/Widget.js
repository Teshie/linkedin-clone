import React from "react";
import "./Widget.css";
import { InfoIcon } from "@material-ui/icons/Info";
const Widget = () => {
  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
    </div>
  );
};

export default Widget;
