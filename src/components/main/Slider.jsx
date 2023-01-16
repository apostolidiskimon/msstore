import React from "react";
import "../main/slider.css";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";

const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel-slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} alt="RESIDENT EVIL 4" />
        </div>
        <div class="carousel-item">
          <img src={img2} alt="2" />
        </div>
        <div class="carousel-item">
          <img src={img3} alt="3" />
        </div>
        <div class="carousel-item">
          <img src={img4} alt="4" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
