import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHref, useParams, useResolvedPath } from "react-router-dom";
import Menu from "../Menu";
import Sliders from "../Slider";
import TypeMenu from "../TypeMenu";
import { Content, Wrapper } from "./ProductMenu.styles";

const ProductMenu = ({ data, loading }) => {
    const { type } = useParams();
    const types = [
        ...new Set(data.filter((value) => value.class === "pizza").map((value) => value.type)),
    ];

    return (
        <>
            <Sliders></Sliders>

            {!loading && (
                <Wrapper>
                    <Content>
                        <div className="header">
                            <h1>{type}</h1>
                        </div>
                        {type === "pizza" ? (
                            <>
                                <TypeMenu types={types} />
                                {types.map((value, index) => {
                                    return (
                                        <div id={value} className="value" key={index}>
                                            <Menu
                                                id={value}
                                                title={value}
                                                data={data.filter((e) => e.type === value)}
                                                detailMenu
                                            />
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <div id={type} className="value">
                                    <Menu
                                        id={type}
                                        title={type}
                                        data={data.filter((value) => value.class === type)}
                                        detailMenu
                                    />
                                </div>
                            </>
                        )}
                    </Content>
                </Wrapper>
            )}
        </>
    );
};

export default ProductMenu;
