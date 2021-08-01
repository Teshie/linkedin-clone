import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./HeaderOption.css";
const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icons" />}
      {avatar && (
        <Avatar
          className="headerOption__avatar"
          src="https://media-exp1.licdn.com/dms/image/D4E35AQHgfU5JBMbFiw/profile-framedphoto-shrink_200_200/0/1624547953635?e=1627974000&v=beta&t=OcmCbQ39O1J2uRELl43Hgl_l3rYI2syRRqFapiVZuT4"
        >
          {user?.photoUrl}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
