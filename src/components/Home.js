import React, { useState, useEffect, useContext } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import SaleProducts from "./SaleProducts";
import Sliders from "./Slider";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ProductMenu from "./ProductMenu";
import ScrollToTop from "./ScrollToTop";
import Cart from "./Cart";
const Home = () => {
    const [state, setState] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("home");
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
            <div
                style={{
                    marginTop: "130px",
                }}
            >
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route exact path="/" element={<Body data={data} loading={loading} />}></Route>
                    <Route
                        path="/:type"
                        element={<ProductMenu data={data} loading={loading} />}
                    ></Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>
                </Routes>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;
