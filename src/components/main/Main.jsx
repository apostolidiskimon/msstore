import React from "react";
import "./main.css";
import image1 from "../../Assets/1.png";
import image2 from "../../Assets/2.jpg";
import image3 from "../../Assets/3.jpg";
import image4 from "../../Assets/4.jpg";
const Main = () => {
  return (
    <div className="maincontainer">
      <section className="maingames">You Can't Miss Them</section>
      <div className="img-slider">
        <div className="slide">
          <img src={image1} alt="" />
          <div className="info">
            <h2>Resident Evil 4 Remake</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="img-slider">
        <div className="slide">
          <img src={image2} alt="" />
          <div className="info">
            <h2>Silent Hill 2</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="img-slider">
        <div className="slide">
          <img src={image3} alt="" />
          <div className="info">
            <h2>Silent Hill 2</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="img-slider">
        <div className="slide">
          <img src={image4} alt="" />
          <div className="info">
            <h2>Silent Hill 2</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
