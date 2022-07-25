import React, { useContext, useState } from "react";
import { Wrapper, Content } from "./Cart.styles";
import { Context } from "../../context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertMoney, groupBy } from "../../helpers.js";
import { useEffect } from "react";

const ProductsTotalPrice = ({ value }) => {
    const [totalPrice, setTotalPrice] = useState(
        value.reduce((total, item) => {
            return total + item.price;
        }, 0)
    );
    useEffect(() => {
        setTotalPrice(
            value.reduce((total, item) => {
                return total + item.price;
            }, 0)
        );
    }, [value]);
    return <span>{convertMoney(totalPrice)}</span>;
};

const Cart = () => {
    const [cartNum, setCartNum, cartData, setCartData] = useContext(Context);
    const [data, setData] = useState(Object.values(groupBy(cartData, "name")));
    const handlePlus = (value) => {
        sessionStorage.setItem("cart", JSON.stringify([...cartData, value]));
        setCartData([...cartData, value]);
        setCartNum(cartNum + 1);
    };
    const handleMinus = (value) => {
        var newData;
        for (var i = 0; i < cartData.length; i++) {
            if (cartData[i].name === value.name) {
                cartData.splice(i, 1);
                newData = cartData;
                break;
            }
        }
        sessionStorage.setItem("cart", JSON.stringify(newData));
        setCartData(newData);
        setCartNum(cartNum - 1);
    };
    const handleTrashIcon = (value) => {
        var numberOfValue = 0;
        var newData = cartData.filter((item) => {
            if (item.name === value.name) {
                numberOfValue++;
            }
            return item.name !== value.name;
        });
        sessionStorage.setItem("cart", JSON.stringify(newData));
        setCartData(newData);
        setCartNum(cartNum - numberOfValue);
    };
    useEffect(() => {
        setData(Object.values(groupBy(cartData, "name")));
    }, [cartData]);
    return (
        <Wrapper>
            <Content>
                {cartNum > 0 ? (
                    <>
                        <h1>Sản phẩm</h1>
                        <div className="product-wrapper">
                            {data.map((value, index) => {
                                return (
                                    <div className="product" key={index}>
                                        <div className="left">
                                            <img src={value[0].image} alt="" />
                                            <div className="title">
                                                <div className="name">{value[0].name}</div>
                                                {value[0].size && (
                                                    <div className="size">
                                                        Kích thước: {value[0].size}
                                                    </div>
                                                )}
                                                {value[0].base && (
                                                    <div className="base">Đế - {value[0].base}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="quantity">
                                                <button
                                                    className="minus"
                                                    onClick={() => {
                                                        return handleMinus(value[0]);
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    value={
                                                        cartData.filter(
                                                            (item) => value[0].name === item.name
                                                        ).length
                                                    }
                                                    readOnly
                                                />
                                                <button
                                                    className="plus"
                                                    onClick={() => {
                                                        return handlePlus(value[0]);
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="price">
                                                <ProductsTotalPrice value={value} />
                                            </div>
                                            <FontAwesomeIcon
                                                onClick={() => {
                                                    return handleTrashIcon(value[0]);
                                                }}
                                                className="trash"
                                                icon={["fas", "trash"]}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <h1>Rất tiếc!!!, bạn không có sản phẩm ở đây</h1>
                        <p>
                            Chúng tôi sẽ giao hàng với hóa đơn trên{" "}
                            <span style={{ color: "red", fontWeight: "bold" }}>100,000 đ</span>
                        </p>
                    </div>
                )}
            </Content>
        </Wrapper>
    );
};

export default Cart;
