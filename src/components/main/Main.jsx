import React from "react";
import Slider from "./Slider";
import "./main.css";
import image1 from "../../Assets/1.png";
import image2 from "../../Assets/2.jpg";
import image3 from "../../Assets/3.jpg";
import image4 from "../../Assets/4.jpg";
const Main = () => {
  return (
    <div className="maincontainer">
      <section className="maingames">You Can't Miss Them</section>
      <Slider />
    </div>
  );
};

export default Main;
