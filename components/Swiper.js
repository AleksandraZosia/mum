import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plan from "../components/Plan";
import styles from "../styles/Swiper.module.css";

export default function SimpleSlider({ plans }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };
  return (
    <Slider {...settings}>
      {plans.map((plan) => (
        <div className={styles.card}>
          <Plan plan={plan} key={plan.key} />
        </div>
      ))}
    </Slider>
  );
}
