import React, { useState, createContext } from "react";

export const Context = React.createContext();

const UserProvider = ({ children }) => {
    const [cartNum, setCartNum] = useState(
        JSON.parse(sessionStorage.getItem("cart") || 0).length || 0
    );
    const [cartData, setCartData] = useState(JSON.parse(sessionStorage.getItem("cart") || 0) || []);
    return (
        <Context.Provider value={[cartNum, setCartNum, cartData, setCartData]}>
            {children}
        </Context.Provider>
    );
};

export default UserProvider;
