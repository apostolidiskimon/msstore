import React from "react";
import "../main/slider.css";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";

const Slider = () => {
  return (
    <div className="contain">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img className="d-block w-100" src={img2} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img className="d-block w-100" src={img3} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img className="d-block w-100" src={img4} alt="First slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
