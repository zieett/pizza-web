import React from "react";
import Grid from "../Grid";
import { Wrapper } from "./Menu.styles";
import Products from "../Products";
const Menu = ({ menuTitle, title, data }) => {
    return (
        <Wrapper>
            {menuTitle && <div className="menu-title">Thực đơn</div>}
            <div className="header">
                <div className="main-title">{title}</div>
            </div>
            <Grid>
                {data.slice(0, 4).map((value, index) => {
                    return <Products data={value}></Products>;
                })}
            </Grid>
            {data.length > 4 && (
                <button className="loading-more-button">
                    Xem thêm<span> +</span>
                </button>
            )}
        </Wrapper>
    );
};

export default Menu;
