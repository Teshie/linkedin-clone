import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQFnejJv9cs1DQ/profile-displaybackgroundimage-shrink_200_800/0/1626769344770?e=1632960000&v=beta&t=qa-7lbRAz8E9f-qDIVnACwRIyBEyikKrK5qGAC2OmV4"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://media-exp1.licdn.com/dms/image/D4E35AQHgfU5JBMbFiw/profile-framedphoto-shrink_200_200/0/1624547953635?e=1627974000&v=beta&t=OcmCbQ39O1J2uRELl43Hgl_l3rYI2syRRqFapiVZuT4"
        />
        <h2>Teshome Yalew</h2>
        <h4>Frontend Web Developer (HTML, CSS, JavaScript & React.js)</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">170</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">230</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("Redux")}
        {recentItem("MaterialUIdesign")}
        {recentItem("ReactRouter")}
        {recentItem("SoftwareEngineering")}
      </div>
    </div>
  );
};

export default Sidebar;
