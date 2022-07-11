import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import SaleProducts from "./SaleProducts";
import Sliders from "./Slider";

const Home = () => {
    return (
        <>
            <div
                style={{
                    marginTop: "130px",
                }}
            >
                <Header />
                <Sliders></Sliders>
                <Body></Body>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;
