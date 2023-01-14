import React from "react";
import "../header/header.css";
import IMG from "../../Assets/logo2.png";
const Header = () => {
  return (
    <div className="containermenu">
      <ul>
        <li>
          <a href="#">My Account</a>
          <audio id="beep" preload="auto">
            <source src="audio/beep.mp3"></source>
          </audio>
        </li>
        <li>
          <a href="#">Game Pass</a>
        </li>
        <li>
          <a href="#">Stuff Picks</a>
        </li>
        <li>
          <a href="#">Browse Categories</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
        <li>
          <input type="text" placeholder="Search.."></input>
        </li>
        <li>
          <img src={IMG} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
