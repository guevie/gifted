import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";

const Navbar = () => {
  const uid = useContext(UidContext);
  //partie redux
  const userData = useSelector((state) => state.userReducer);
  console.log(userData);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/Gifts & Talents.jpg" alt="icon" />
              <h3>Gifted</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li className="">
              <div className="logo">
              <NavLink exact to="/profil">
                {/*<img src={userData.picture} alt="user-pic" />*/}
                </NavLink>
              </div>
            </li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5> {userData.pseudo} </h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
