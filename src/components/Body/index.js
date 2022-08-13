import React, { useEffect, useState, useLayoutEffect } from "react";
import Grid from "../Grid";
import SaleProducts from "../SaleProducts";
import Menu from "../Menu";
import { Outlet } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import Sliders from "../Slider";

const Body = ({ data, loading }) => {
    return (
        <>
            <Sliders></Sliders>

            <SaleProducts></SaleProducts>
            {loading ? (
                <div style={{ width: "100%" }}>
                    <ReactLoading
                        type="spin"
                        color="#006a31"
                        style={{ margin: "50px auto", width: "150px" }}
                    />
                </div>
            ) : (
                <>
                    <Menu
                        data={data.filter((value) => value.class === "pizza")}
                        menuTitle
                        title="Pizza"
                    ></Menu>
                    <Menu
                        data={data.filter((value) => value.class === "macaroni")}
                        title="Nui bỏ lò"
                    ></Menu>
                    <Menu
                        data={data.filter((value) => value.class === "appetizer")}
                        title="Khai vị"
                    ></Menu>
                    <Menu
                        data={data.filter((value) => value.class === "spaghetti")}
                        title="Mì Ý"
                    ></Menu>
                    <Menu
                        data={data.filter((value) => value.class === "salad")}
                        title="Salad"
                    ></Menu>
                    <Menu
                        data={data.filter((value) => value.class === "beverage")}
                        title="Thức uống"
                    ></Menu>
                    <Menu
                        data={data.filter((value) => value.class === "dessert")}
                        title="Tráng miệng"
                    ></Menu>
                </>
            )}
        </>
    );
};

export default Body;
