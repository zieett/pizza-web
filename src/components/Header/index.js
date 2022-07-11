import React, { useRef, useState } from "react";
import { HeaderBot, HeaderTop, Wrapper, Content } from "./Header.styles";
import logo from "../../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    const [shippingText, setShippingText] = useState({
        text: "Nhập địa chỉ của bạn",
        icon: "location-dot",
    });
    let active = useRef();

    const handleSearchIconClick = (e) => {
        active.current.classList.toggle("active");
    };

    return (
        <Wrapper>
            <Content>
                <HeaderTop>
                    <img src={logo} alt="logo" />
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
                        <FontAwesomeIcon icon={["fas", "circle-user"]} />
                        <span>Đăng nhập</span>
                        <span>/</span>
                        <span>Tạo tài khoản</span>
                    </div>
                </HeaderTop>
                <HeaderBot>
                    <div className="left-content">
                        <ul>
                            <li>Khuyến mãi</li>
                            <li className="has-sublist">
                                <span>Pizza</span>
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
                            <li>Khai vị</li>
                            <li>Mì ý</li>
                            <li>Nui bỏ lò</li>
                            <li>Salad</li>
                            <li>Tráng miệng</li>
                            <li>Thức uống</li>
                            <li>Kem hộp</li>
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
                            <span>Giỏ hàng</span>
                            <span>0</span>
                        </div>
                    </div>
                </HeaderBot>
            </Content>
        </Wrapper>
    );
};

export default Header;
