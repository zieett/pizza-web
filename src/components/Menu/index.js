import React, { useState, useRef } from "react";
import Grid from "../Grid";
import { Wrapper } from "./Menu.styles";
import Products from "../Products";
const Menu = ({ menuTitle, title, data }) => {
    const index = useRef(4);
    const [state, setState] = useState(data.slice(0, index.current));
    // console.log(state);
    console.log(index.current);
    const handleLoadingMore = () => {
        setState((prev) => {
            let newData;
            index.current + 4 >= data.length
                ? (newData = data.slice(index.current, 11))
                : (newData = data.slice(index.current, index.current + 4));
            console.log(index.current);
            console.log(newData);
            index.current += 4;
            return [...prev, ...newData];
        });
    };
    return (
        <Wrapper>
            {menuTitle && <div className="menu-title">Thực đơn</div>}
            <div className="header">
                <div className="main-title">{title}</div>
            </div>
            <Grid>
                {state.map((value, index) => {
                    return <Products data={value}></Products>;
                })}
            </Grid>
            {data.length > 4 && index.current < data.length && (
                <button className="loading-more-button" onClick={handleLoadingMore}>
                    Xem thêm<span> +</span>
                </button>
            )}
        </Wrapper>
    );
};

export default Menu;
