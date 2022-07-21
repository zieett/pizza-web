import React, { useEffect, useState, useLayoutEffect } from "react";
import Grid from "../Grid";
import SaleProducts from "../SaleProducts";
import Menu from "../Menu";

import axios from "axios";

const Body = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        await axios
            .get("http://localhost:3001/products", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then(function (response) {
                setData(response.data.products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <SaleProducts></SaleProducts>
            {!loading && (
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
