import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Content, Wrapper } from "./Slider.styles";
import { data } from "./Sliderdata";

const Slider = () => {
    const [current, setCurrent] = useState(0);
    let interval = useRef(null);
    useEffect(() => {
        if (interval.current) {
            clearTimeout(interval);
        }
        interval.current = setTimeout(() => {
            setCurrent((prevState) => (prevState === data.length - 1 ? 0 : prevState + 1));
        }, 2000);
        return () => {
            if (interval.current) {
                clearTimeout(interval);
            }
        };
    }, [current]);

    const nextSlide = () => {
        clearTimeout(interval.current);
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        clearTimeout(interval.current);
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };
    if (!Array.isArray(data) || data.length === 0) {
        return null;
    }
    console.log(current);
    return (
        <Wrapper>
            <Content>
                <FontAwesomeIcon
                    icon={["fas", "circle-left"]}
                    className="left-arrow arrow"
                    onClick={prevSlide}
                />
                <FontAwesomeIcon
                    icon={["fas", "circle-right"]}
                    className="right-arrow arrow"
                    onClick={nextSlide}
                />
                {data.map((value, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && <img src={value.image} alt=""></img>}
                        </div>
                    );
                })}
            </Content>
        </Wrapper>
    );
};

export default Slider;
