import React, { useContext, useRef, useState } from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import { Wrapper, Content } from "./PaymentProgress.styles";
import "react-step-progress/dist/index.css";
import hinhThuc1 from "../../images/hinhthuc_1.png";
import hinhThuc2 from "../../images/hinhthuc_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InformationForm, LoginForm } from "../Form";
import styled from "styled-components";
import { Context } from "../../context";

const step3Content = <h1>Step 3 Content</h1>;

const Step1Card = ({ image, content, title, active, ...property }) => {
    return (
        <div className={active ? "card-wrapper card-wrapper-active" : "card-wrapper"} {...property}>
            <img src={image} alt="" />
            <div className="content">
                <div className="title">{title}</div>
                <div className="body">{content}</div>
            </div>
            {active && (
                <div className="step1-active">
                    <i>
                        <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
                    </i>
                </div>
            )}
        </div>
    );
};

const Step1Content = () => {
    let card1 = (
        <>
            "Giao hàng tận nơi với đơn hàng <strong>thực thanh toán</strong> từ{" "}
            <strong> 100.000đ</strong>.Phụ thu phí giao hàng từ
            <strong> 25,000đ</strong> cho mỗi đơn đặt hàng qua Hotline 19006066 hoặc Website, bao
            gồm hoá đơn có các sản phẩm thuộc chương trình khuyến mại."
        </>
    );
    let card2 = (
        <>
            Nhận đơn hàng của bạn tại <br></br> Nhà hàng The Pizza Company
        </>
    );

    const [step1Active, setStep1Active] = useState(true);
    console.log("step1");

    return (
        <div className="step1">
            <div className="top">
                <div className="title">Hình thức đặt hàng</div>
                <div className="content">
                    <p>Quý khách vui lòng lựa chọn phương thức đặt hàng phù hợp.</p>
                    <p>
                        Quý khách có thể chọn Đặt giao hàng tận nơi hoặc Đặt đến lấy trực tiếp tại
                        chi nhánh nhà hàng gần nhất.
                    </p>
                </div>
            </div>
            <div className="bot">
                <Step1Card
                    image={hinhThuc1}
                    active={step1Active}
                    title="Đặt giao hàng"
                    content={card1}
                    onClick={() => {
                        setStep1Active(true);
                    }}
                />
                <Step1Card
                    image={hinhThuc2}
                    active={!step1Active}
                    title="Đặt đến lấy"
                    content={card2}
                    onClick={() => {
                        setStep1Active(false);
                    }}
                />
            </div>
        </div>
    );
};
function step1Validator() {
    return true;
}
function step2Validator() {
    return true;
}

function step3Validator() {
    return;
}

const PaymentProgress = () => {
    const [step2, setStep2] = useState(false);
    const { isLogin } = useContext(Context);
    const [step, setStep] = useState(0);
    return (
        <Wrapper>
            <Content step2={step2}>
                <StepProgressBar
                    startingStep={step}
                    stepClass="step-class"
                    buttonWrapperClass="button"
                    progressClass="progress-class"
                    contentClass="content-class"
                    wrapperClass="bar-wrapper"
                    steps={[
                        {
                            label: "Hinh thức đặt hàng",
                            name: "step 1",
                            content: <Step1Content />,
                            validator: () => {
                                !isLogin ? setStep(step + 1) : setStep(step + 2);
                                setStep2(true);
                                return true;
                            },
                        },
                        {
                            label: "Step 2",
                            name: "Thông tin đặt hàng",
                            content: <InformationForm progress />,
                            validator: () => {
                                return true;
                            },
                        },
                        {
                            label: "Step 3",
                            name: "Thông tin thanh toán",
                            content: step3Content,
                            validator: step3Validator,
                        },
                    ]}
                />
            </Content>
        </Wrapper>
    );
};

export default PaymentProgress;
