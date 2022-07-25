import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const TypeMenu = ({ types }) => {
    const refs = useRef(types.map(() => React.createRef()));
    const markerRef = useRef();

    let myTimeout;
    useEffect(() => {
        markerRef.current.style.height = refs.current[0].current.scrollHeight + "px";
        markerRef.current.style.left = refs.current[0].current.offsetLeft + "px";
        refs.current[0].current.style.color = "white";
        return () => {
            clearTimeout(myTimeout);
        };
    }, []);
    const handleTypeChange = (value, index, e) => {
        for (var i = 0; i < types.length; i++) {
            refs.current[i].current.style.color = "black";
        }
        markerRef.current.style.left = refs.current[index].current.offsetLeft + "px";
        markerRef.current.style.width = refs.current[index].current.offsetWidth + "px";
        markerRef.current.style.height = refs.current[index].current.scrollHeight + "px";
        myTimeout = setTimeout(() => {
            refs.current[index].current.style.color = "white";
        }, 500);
    };

    return (
        <div className="types">
            <div className="marker" ref={markerRef}></div>
            {types.map((value, index) => {
                return (
                    <a
                        key={index}
                        className="type-name"
                        onClick={(e) => {
                            return handleTypeChange(value, index);
                        }}
                        href={"#" + value}
                        ref={refs.current[index]}
                    >
                        {value}
                    </a>
                );
            })}
        </div>
    );
};

export default TypeMenu;
