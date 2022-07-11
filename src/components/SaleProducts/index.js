import React, { Component } from "react";
import Slider from "react-slick";
import { Wrapper } from "./SaleProducts.styles";
import { data } from "./SaleProductsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertMoney } from "../../helpers";
const CustomSlide = (prop) => {
    const { index, data, ...props } = prop;
    return (
        <div {...props} style={{ margin: "0 15px" }} className="abc">
            <img className="image" src={data.image} alt="" />
            <h2 className="title">{data.title}</h2>
            <h5 className="description">{data.description}</h5>
            <div className="bottom-description">
                <div className="left-content">
                    <div className="left-content-title">Gia chi tu</div>
                    <div className="left-content-price">{convertMoney(data.price)}</div>
                </div>
                <div className="right-content">
                    <span>Mua ngay</span>
                    <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        style={{ fontSize: "1rem" }}
                    ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};
function CustomArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
}
const SaleProducts = () => {
    console.log(data);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
        adaptedWidth: false,
    };
    return (
        <Wrapper>
            <h1>Khuyến mãi, Combo</h1>
            <Slider {...settings}>
                {data.map((value, index) => {
                    return <CustomSlide data={value} key={index} />;
                })}
            </Slider>
        </Wrapper>
    );
};

export default SaleProducts;
