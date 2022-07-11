import React from "react";
import { FooterBot, FooterTop, Wrapper } from "./Footer.styles";
import footerLogo from "../../images/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bocongthuong from "../../images/bocongthuong.png";
const Footer = () => {
    return (
        <Wrapper>
            <FooterTop>
                <div className="row-1 row">
                    <img src={footerLogo} alt="Footer Logo"></img>
                </div>
                <div className="row-2 row">
                    <h2>Giới thiệu</h2>
                    <h4>Hệ thống cửa hàng</h4>
                    <h4>Câu chuyện thương hiệu</h4>
                    <h4>Ưu đãi thành viên</h4>
                    <h4>Tin tức và sự kiện</h4>
                    <h4>Tuyển dụng</h4>
                    <h2>Văn phòng đại diện</h2>
                    <h4 className="address">
                        Công ty Cổ phần Pizza Ngon 77 Trần Nhân Tôn, Phường 9, Quận 5, Thành phố Hồ
                        Chí Minh SĐT: +84 (028) 7308 3377 MST: 0104115527 Cấp lần đầu ngày 17 tháng
                        08 năm 2009 và có thể được sửa đổi vào từng thời điểm
                    </h4>
                </div>
                <div className="row-3 row">
                    <h2>Liên hệ</h2>
                    <h4>Liên hệ</h4>
                    <h4>Hướng dẫn mua hàng</h4>
                    <h4>Chính sách giao hàng</h4>
                    <h4>Chính sách bảo mật</h4>
                    <h4>Điều khoản và điều kiện</h4>
                    <h2>Tổng đài hỗ trợ</h2>
                    <h4>
                        Đặt hàng: <span>1900 6066</span> (9:30 - 21:30)
                    </h4>
                    <h4>
                        Tổng đài CSKH: <span>1900 663 606</span> (9:30 - 21:30)
                    </h4>
                </div>
                <div className="row-4 row">
                    <h2>Liên hệ với chúng tôi</h2>
                    <span className="icon">
                        <FontAwesomeIcon icon={["fab", "facebook"]}></FontAwesomeIcon>
                    </span>
                    <span className="icon">
                        <FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
                    </span>
                    <span className="icon">
                        <FontAwesomeIcon icon={["fab", "youtube"]}></FontAwesomeIcon>
                    </span>
                    <div>
                        <img src={bocongthuong} alt="bo cong thuong"></img>
                    </div>
                </div>
            </FooterTop>
            <FooterBot>
                <h4>Bản quyền © 2022 The Pizza Company. Đã đăng ký bản quyền.</h4>
            </FooterBot>
        </Wrapper>
    );
};

export default Footer;
