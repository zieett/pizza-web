import React, { useState, createContext } from "react";
import { groupBy } from "./helpers.js";

export const Context = React.createContext();

const UserProvider = ({ children }) => {
    const [cartNum, setCartNum] = useState(
        JSON.parse(sessionStorage.getItem("cart") || 0).length || 0
    );
    const [cartData, setCartData] = useState(JSON.parse(sessionStorage.getItem("cart") || 0) || []);
    const [cartDataGroup, setCartDataGroup] = useState(
        Object.values(groupBy(cartData, "name")) || []
    );
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token") ? true : false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    return (
        <Context.Provider
            value={{
                cartNum,
                setCartNum,
                cartData,
                setCartData,
                cartDataGroup,
                setCartDataGroup,
                isLogin,
                setIsLogin,
                user,
                setUser,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default UserProvider;
