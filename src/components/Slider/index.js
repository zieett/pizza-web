import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Content, Wrapper } from "./Slider.styles";
import { data } from "./Sliderdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "400px",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        adaptiveWidth: false,
    };
    return (
        <Wrapper>
            <Content>
                <Slider {...settings}>
                    {data.map((value, index) => {
                        return <img className="image" src={value.image} key={index} alt="" />;
                    })}
                </Slider>
            </Content>
        </Wrapper>
    );
};

export default Sliders;
