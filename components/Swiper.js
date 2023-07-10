import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plan from "../components/Plan";

export default function SimpleSlider({ plans }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    initialSlide: 1,
    centerPadding: "50px",
  };
  return (
    <Slider {...settings}>
      {plans.map((plan) => (
        <div key={plan.key}>
          <Plan plan={plan} />
        </div>
      ))}
    </Slider>
  );
}
