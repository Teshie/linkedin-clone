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
      {newsArticle("React.js", "React.js News - 9222 reads")}
      {newsArticle("Learn Redux", "You might don't need redux - 7454 reads")}
      {newsArticle(
        "Covid-19 Vaccination",
        "You need to be vaccinated - 6548 reads"
      )}
      {newsArticle(
        "Netflix New Movies",
        "Latest Movies On Netflix- 52369 reads"
      )}
      {newsArticle("Bitcon Status", "How Bitcoin is rising - 78985 reads")}
      {newsArticle("Ethiopia", "We all are fom Ethiopia - 87568 reads")}
    </div>
  );
};

export default Widg;
