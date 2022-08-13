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
import PaymentProgress from "./PaymentProgress";
import { LoginForm, RegisterForm } from "./Form";
const Home = () => {
    let domainName = "http://ec2-3-93-13-118.compute-1.amazonaws.com:3001";
    const [state, setState] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("home");
    const fetchData = async () => {
        await axios
            .get(`${domainName}/products`, {
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
                    <Route path="/payment" element={<PaymentProgress></PaymentProgress>}></Route>
                    <Route path="/login" element={<LoginForm></LoginForm>}></Route>
                    <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
                </Routes>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;
