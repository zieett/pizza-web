import React, { useContext, useEffect, useRef, useState } from "react";
import { HeaderBot, HeaderTop, Wrapper, Content } from "./Header.styles";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context";
import { groupBy, convertMoney } from "../../helpers";
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
const Header = () => {
    const [shippingText, setShippingText] = useState({
        text: "Nhập địa chỉ của bạn",
        icon: "location-dot",
    });
    const a = useContext(Context);
    const {
        cartNum,
        setCartNum,
        cartData,
        setCartData,
        cartDataGroup,
        setCartDataGroup,
        setIsLogin,
        isLogin,
        user,
        setUser,
    } = useContext(Context);
    let active = useRef();
    let navigate = useNavigate();
    useEffect(() => {
        setCartDataGroup(Object.values(groupBy(cartData, "name")) || []);
    }, [cartData, setCartDataGroup]);
    const handleSearchIconClick = (e) => {
        active.current.classList.toggle("active");
    };
    const handleCartClick = () => {
        navigate("/cart");
    };
    const handleRemoveFromCart = (value) => {
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
    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLogin(false);
        alert("You've log out");
    };
    return (
        <Wrapper>
            <Content>
                <HeaderTop>
                    <StyledLink to="/">
                        <img src={logo} alt="logo" />
                    </StyledLink>
                    <div className="mid">
                        <div className="shipping">
                            <div className="form-radio">
                                <input
                                    type="radio"
                                    id="order-delivery"
                                    name="ship"
                                    defaultChecked={true}
                                    onChange={() =>
                                        setShippingText({
                                            text: "Nhập địa chỉ của bạn",
                                            icon: "location-dot",
                                        })
                                    }
                                />
                                <label htmlFor="order-delivery">
                                    <FontAwesomeIcon icon={["fas", "truck"]} />
                                    <span> Đặt giao hàng</span>
                                </label>
                            </div>
                            <div className="form-radio">
                                <input
                                    type="radio"
                                    id="take-away"
                                    name="ship"
                                    onChange={() =>
                                        setShippingText({ text: "Nhập cửa hàng", icon: "house" })
                                    }
                                />
                                <label htmlFor="take-away">
                                    <FontAwesomeIcon icon={["fas", "box"]} />
                                    <span>Đặt lấy hàng</span>
                                </label>
                            </div>
                        </div>
                        <div className="search-address">
                            <FontAwesomeIcon
                                icon={["fas", shippingText.icon]}
                                className="search-icon"
                            />
                            <input placeholder={shippingText.text} />
                        </div>
                    </div>
                    <div className="login">
                        {isLogin ? (
                            <>
                                <span>{user?.name}</span>
                                <div className="log-out" onClick={handleLogOut}>
                                    Log out
                                </div>
                            </>
                        ) : (
                            <>
                                {" "}
                                <FontAwesomeIcon icon={["fas", "circle-user"]} />
                                <StyledLink to="/login" style={{ color: "black" }}>
                                    <span>Đăng nhập</span>
                                </StyledLink>
                                <span>/</span>
                                <StyledLink to="/register" style={{ color: "black" }}>
                                    <span>Tạo tài khoản</span>
                                </StyledLink>
                            </>
                        )}
                    </div>
                </HeaderTop>
                <HeaderBot>
                    <div className="left-content">
                        <ul>
                            <li>Khuyến mãi</li>
                            <li className="has-sublist">
                                <StyledLink to="/pizza">
                                    <span>Pizza</span>
                                </StyledLink>
                                <div className="dropdown">
                                    <div className="dropdown-menu">
                                        <span>Công thức đặc biệt</span>
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>Hải sản cao cấp</span>
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>Thập cẩm cao cấp</span>
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>Truyền thống cao cấp</span>
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>Nhân nhồi</span>
                                    </div>
                                </div>
                            </li>
                            <StyledLink to="appetizer">
                                <li>Khai vị</li>
                            </StyledLink>
                            <StyledLink to="spaghetti">
                                <li>Mì ý</li>
                            </StyledLink>
                            <StyledLink to="macaroni">
                                <li>Nui bỏ lò</li>
                            </StyledLink>
                            <StyledLink to="salad">
                                <li>Salad</li>
                            </StyledLink>
                            <StyledLink to="dessert">
                                <li>Tráng miệng</li>
                            </StyledLink>
                            <StyledLink to="beverage">
                                <li>Thức uống</li>
                            </StyledLink>
                            <StyledLink to="iceCream">
                                <li>Kem hộp</li>
                            </StyledLink>
                        </ul>
                    </div>
                    <div className="right-content">
                        <button className="search-icon" onClick={handleSearchIconClick}>
                            <FontAwesomeIcon
                                style={{
                                    color: "white",
                                    width: "30px",
                                    height: "20px",
                                }}
                                icon={["fas", "magnifying-glass"]}
                                className="btn"
                            ></FontAwesomeIcon>
                        </button>
                        <div className="search-bar" ref={active}>
                            <input placeholder="Tim kiem san pham"></input>
                            <FontAwesomeIcon
                                style={{
                                    color: "#00b041",
                                    position: "absolute",
                                    right: "20px",
                                    top: "12px",
                                    cursor: "pointer",
                                }}
                                icon={["fas", "magnifying-glass"]}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="cart">
                            <FontAwesomeIcon icon={["fas", "cart-shopping"]}></FontAwesomeIcon>
                            <span className="text" onClick={handleCartClick}>
                                Giỏ hàng
                            </span>
                            <span className="number">{cartNum}</span>
                            <div className="cart-mini">
                                {cartNum === 0 ? (
                                    <div className="cart-mini-wrapper">
                                        <h2>Rất tiếc!!!, bạn không có sản phẩm ở đây</h2>
                                        <p>
                                            Chúng tôi sẽ giao hàng với hóa đơn trên{" "}
                                            <span>100,000 đ</span>
                                        </p>
                                    </div>
                                ) : (
                                    <div className="cart-mini-wrapper">
                                        {cartDataGroup.map((value, index) => {
                                            return (
                                                <div className="cart-item" key={index}>
                                                    <div className="cart-mini-wrapper-top">
                                                        <img
                                                            src={value[0].image}
                                                            className="cart-mini-wrapper-image"
                                                            alt=""
                                                        ></img>
                                                        <div className="cart-mini-wrapper-detail">
                                                            <div className="top">
                                                                <div>
                                                                    <span>{value[0].name}</span>
                                                                    <FontAwesomeIcon
                                                                        icon={["fas", "trash"]}
                                                                        className="trash"
                                                                        onClick={() => {
                                                                            return handleRemoveFromCart(
                                                                                value[0]
                                                                            );
                                                                        }}
                                                                    ></FontAwesomeIcon>
                                                                </div>
                                                            </div>
                                                            <div className="bot">
                                                                <h3 className="amount">
                                                                    Số lượng:{" "}
                                                                    <span>{value.length}</span>
                                                                </h3>
                                                                <h3 className="cart-price">
                                                                    {convertMoney(
                                                                        value[0].price *
                                                                            value.length
                                                                    )}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <div className="cart-mini-wrapper-bot">
                                            <div className="total-price-wrapper">
                                                <span>Tổng tiền</span>
                                                <span className="total-price">
                                                    {convertMoney(
                                                        cartData.reduce(
                                                            (total, value) => total + value.price,
                                                            0
                                                        )
                                                    )}
                                                </span>
                                            </div>
                                            <div
                                                className="payment"
                                                onClick={() => navigate("/cart")}
                                            >
                                                <span>Thanh toán</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </HeaderBot>
            </Content>
        </Wrapper>
    );
};

export default Header;
