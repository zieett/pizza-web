import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context.js";
import { Content, Wrapper } from "./Form.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { convertMoney } from "../../helpers.js";
import emailjs from "@emailjs/browser";
const domainName = "http://ec2-18-208-109-226.compute-1.amazonaws.com/:3001";
const registerSchema = yup.object({
    firstName: yup.string().required("Tên bắt buộc nhập"),
    lastName: yup.string().required("Tên bắt buộc nhập"),
    email: yup.string().email().required("Email bắt buộc nhập"),
    password: yup
        .string()
        .min(4, "Mật khẩu phải có ít nhất 4 ký tự")
        .max(15, "Mật khẩu tối đa 15 ký tự")
        .required("Mật khẩu bắt buộc nhập"),
    confirmPassword: yup
        .string()
        .required("Mật khẩu bắt buộc nhập")
        .oneOf([yup.ref("password"), null], "Confirm password is not correct"),
});

const loginSchema = yup.object({
    email: yup.string().email().required("Số điện thoại bắt buộc nhập"),
    password: yup.string().required("Mật khẩu bắt buộc nhập"),
});

const informationFormSchema = yup.object({
    name: yup.string().required("Ho va Ten bat buoc nhap"),
    phoneNumber: yup
        .string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "So dien thoai khong hop le")
        .required("So dien thoai bat buoc nhap"),
    city: yup.string().required(),
    district: yup.string().required(),
    ward: yup.string().required(),
    addressNumber: yup.number().typeError("Nhap so dien thoai").required("So nha bat buoc nhap"),
    addressName: yup.string().required("So nha bat buoc nhap"),
    addressDetail: yup.string(),
});

const InformationForm = ({ progress }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    console.log("rerender");
    const { cartData, setCartData, setCartNum } = useContext(Context);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(informationFormSchema),
    });
    const submitForm = async (data) => {
        setLoading(true);
        console.log(123);
        let totalPrice = convertMoney(cartData.reduce((total, value) => total + value.price, 0));
        await axios
            .post(`${domainName}/sendPayment`, { data, totalPrice })
            .then((res) => {})
            .catch((err) => console.log(err));

        await axios
            .post(`${domainName}/sendSMS`, {
                totalPrice: totalPrice,
                name: data.name,
            })
            .then((res) => {
                console.log(res);
                alert("Bạn đã đặt hàng thành công");
                sessionStorage.removeItem("cart");
                setCartData([]);
                setCartNum(0);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };
    return (
        <Wrapper {...(progress && { style: { marginTop: 0 } })}>
            <Content>
                {!loading && (
                    <form className="form-container container" onSubmit={handleSubmit(submitForm)}>
                        <div className="top">
                            <h1>Đặt giao hàng</h1>
                        </div>
                        <div className="bottom flex">
                            <div className="left">
                                <div className="information-form">
                                    <h1>Thông tin nhận hàng</h1>
                                    <label htmlFor="name">Họ và Tên</label>
                                    <input
                                        type="text"
                                        className="name"
                                        name="name"
                                        {...register("name")}
                                    />
                                    <div className="error">{errors.name?.message}</div>
                                    <label htmlFor="phoneNumber">Số điện thoại</label>
                                    <input
                                        type="number"
                                        className="phone-number"
                                        name="phoneNumber"
                                        {...register("phoneNumber")}
                                    />
                                    <div className="error">{errors.phoneNumber?.message}</div>
                                    <label htmlFor="city">Tỉnh/Thành</label>
                                    <select
                                        name="city"
                                        {...register("city")}
                                        onChange={(e) =>
                                            setValue("select", e.target.value, {
                                                shouldValidate: true,
                                            })
                                        }
                                    >
                                        <option value="hcm" defaultValue>
                                            Ho Chi Minh
                                        </option>
                                        <option value="hanoi">Ha Noi</option>
                                    </select>
                                    <div className="error">{errors.city?.message}</div>
                                    <label htmlFor="district">Quận/Huyện</label>
                                    <select name="district" {...register("district")}>
                                        <option value="district1" defaultValue>
                                            Quan 1
                                        </option>
                                        <option value="districtThuDuc">Quan Thu Duc</option>
                                    </select>
                                    <div className="error">{errors.district?.message}</div>
                                    <label htmlFor="ward">Phường/xã</label>
                                    <select name="ward" {...register("ward")}>
                                        <option value="ward1" defaultValue>
                                            Phuong 1
                                        </option>
                                        <option value="ward2">Phuong 2</option>
                                    </select>
                                    <div className="error">{errors.ward?.message}</div>
                                    <label htmlFor="addressNumber">
                                        Số nhà
                                        <div>
                                            Vui lòng nhập thông tin theo cú pháp: số cụ thể, phần
                                            chữ hoặc Hẻm hoặc Ngõ hoặc Kiệt nhập ở ô Thông tin chi
                                            tiết. VD1: Nhà số 6 Hẻm hoặc Ngõ hoặc Kiệt 12 ={">"}{" "}
                                            Nhập: 12 VD2: Nhà số 6A hoặc 6bis hoặc H6 hoặc L6 ={">"}{" "}
                                            Nhập: 6 *Nếu nhà không có số, vui lòng nhập: 1
                                        </div>
                                    </label>
                                    <input
                                        type="number"
                                        className="address-number"
                                        name="addressNumber"
                                        {...register("addressNumber")}
                                    />
                                    <div className="error">{errors.addressNumber?.message}</div>
                                    <label htmlFor="addressName">
                                        Tên đường
                                        <div>
                                            Vui lòng nhập tên đường. Ưu tiên chọn tên đường từ gợi
                                            ý.
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        className="address-name"
                                        name="addressName"
                                        {...register("addressName")}
                                    />
                                    <div className="error">{errors.addressName?.message}</div>
                                    <label htmlFor="addressDetail">
                                        Thông tin chi tiết
                                        <div>
                                            Vui lòng nhập đủ Hẻm/ Ngõ/ Ngách/ Kiệt/ Thôn/ Ấp/ Chung
                                            Cư/ Khu Đô Thị/ Khu Dân Cư/ Số Căn Hộ cụ thể kèm những
                                            yêu cầu khác (nếu có) để hướng dẫn cho nhân viên giao
                                            hàng.
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        className="address-detail"
                                        name="addressDetail"
                                        {...register("addressDetail")}
                                    />
                                    <div className="error">{errors.addressDetail?.message}</div>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <h1>Chọn thời gian nhận hàng</h1>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="submit">
                            Thanh toán
                        </button>
                    </form>
                )}
            </Content>
        </Wrapper>
    );
};

const LoginForm = ({ progress }) => {
    let navigate = useNavigate();
    const { setIsLogin } = useContext(Context);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const submitForm = (data) => {
        axios
            .post(`${domainName}/login`, {
                userName: data.email,
                password: data.password,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setIsLogin(true);
                navigate("/");
            })
            .catch((err) => alert("Invalid email or password"));
    };
    return (
        <Wrapper {...(progress && { style: { marginTop: 0 } })}>
            <Content>
                <div className="form-container">
                    <form className="login-form" onSubmit={handleSubmit(submitForm)}>
                        <h1>Đăng nhập</h1>
                        <label htmlFor="email">
                            Email <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <div className="error">{errors.email?.message}</div>
                        <label htmlFor="password">
                            Password <span>*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <div className="error">{errors.password?.message}</div>
                        <div className="forgot-password">Quên mật khẩu</div>
                        <div className="text">
                            Bạn đã có tài khoản chưa? <span>Tạo tài khoản</span>
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </div>
            </Content>
        </Wrapper>
    );
};

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });
    let navigate = useNavigate();
    const submitForm = async (data) => {
        await axios
            .post(
                `${domainName}/register`,
                {
                    userName: data.email,
                    password: data.password,
                },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            )
            .then((res) => {
                alert("Bạn đã đăng ký thành công");
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };
    return (
        <Wrapper>
            <Content>
                <div className="form-container">
                    <form className="register-form" onSubmit={handleSubmit(submitForm)}>
                        <h1>Tạo tài khoản</h1>
                        <label htmlFor="firstName">
                            First name <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            {...register("firstName")}
                        />
                        <div className="error">{errors.firstName?.message}</div>
                        <label htmlFor="lastName">
                            Last name <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            {...register("lastName")}
                        />
                        <div className="error">{errors.lastName?.message}</div>
                        <label htmlFor="email">
                            Email <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <div className="error">{errors.email?.message}</div>
                        <label htmlFor="password">
                            Password <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <div className="error">{errors.password?.message}</div>
                        <label htmlFor="confirmPassword">
                            Confirm password <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="confirmPassword"
                            placeholder="Password"
                            {...register("confirmPassword")}
                        />
                        <div className="error">{errors.confirmPassword?.message}</div>
                        <button type="submit">
                            Đăng ký{"\u00a0\u00a0"}
                            <span> -{">"}</span>
                        </button>
                    </form>
                </div>
            </Content>
        </Wrapper>
    );
};

export { LoginForm, RegisterForm, InformationForm };
