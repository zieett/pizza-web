import React, { useState, useRef } from "react";
import Grid from "../Grid";
import { Wrapper } from "./Menu.styles";
import Products from "../Products";
import { useEffect } from "react";
const Menu = ({ menuTitle, title, data, detailMenu, id }) => {
    const index = useRef(4);
    const [state, setState] = useState(!detailMenu ? data.slice(0, index.current) : data);
    useEffect(() => {
        setState(!detailMenu ? data.slice(0, index.current) : data);
    }, [data, detailMenu]);
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
            <div className={!detailMenu ? "header" : "detail-menu-header"}>
                <div className={!detailMenu ? "main-title main-title-before" : "main-title"}>
                    {title}
                </div>
            </div>
            <Grid>
                {state.map((value, index) => {
                    return <Products key={index} data={value}></Products>;
                })}
            </Grid>
            {!detailMenu && data.length > 4 && index.current < data.length && (
                <button className="loading-more-button" onClick={handleLoadingMore}>
                    Xem thêm<span> +</span>
                </button>
            )}
        </Wrapper>
    );
};

export default Menu;
