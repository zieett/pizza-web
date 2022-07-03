import React from "react";
import { HeaderBot, HeaderTop, Wrapper, Content } from "./Header.styles";
import logo from "../../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    return (
        <Wrapper>
            <Content>
                <HeaderTop>
                    <img src={logo} alt="logo" />
                    <div className="mid">
                        <div className="shipping">
                            <div className="form-radio">
                                <input type="radio" id="order-delivery" name="ship" checked />
                                <label for="order-delivery">
                                    <FontAwesomeIcon icon={["fas", "truck"]} />
                                    <span> Đặt giao hàng</span>
                                </label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" id="take-away" name="ship" />
                                <label for="take-away">
                                    <FontAwesomeIcon icon={["fas", "box"]} />
                                    <span>Đặt lấy hàng</span>
                                </label>
                            </div>
                        </div>
                        <div className="search-address">
                            <FontAwesomeIcon
                                icon={["fas", "location-dot"]}
                                className="search-icon"
                            />
                            <input placeholder="Nhập địa chỉ của bạn" />
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
                        <div className="search-box">
                            <FontAwesomeIcon
                                style={{
                                    color: "white",
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
