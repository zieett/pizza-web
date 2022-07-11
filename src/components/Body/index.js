import React from "react";
import Grid from "../Grid";
import SaleProducts from "../SaleProducts";
import Menu from "../Menu";
import { data } from "../SaleProducts/SaleProductsData";
import { data2 } from "../SaleProducts/SaleProductsData2";

const Body = () => {
    return (
        <>
            <SaleProducts></SaleProducts>
            <Menu data={data} menuTitle title="Pizza"></Menu>
            <Menu data={data} title="Nui bỏ lò"></Menu>
            <Menu data={data} title="Khai vị"></Menu>
            <Menu data={data} title="Mì Ý"></Menu>
            <Menu data={data} title="Salad"></Menu>
            <Menu data={data} title="Thức uống"></Menu>
            <Menu data={data2} title="Tráng miệng"></Menu>
        </>
    );
};

export default Body;
