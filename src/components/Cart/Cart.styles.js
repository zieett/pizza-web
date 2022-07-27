import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 180px;
    min-height: 400px;
`;

export const Content = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    h1:hover {
        color: #006a31;
    }
    .product {
        display: flex;
        border-bottom: 1px solid lightgray;

        align-items: center;
        padding: 20px 30px;

        .left {
            display: flex;
            flex: 1 1 50%;
            img {
                width: 120px;
                height: 120px;
            }
            .title {
                margin: 0 20px;
            }
            .name {
                font-size: 1.5rem;
                font-weight: bold;
            }
            .size .base {
                font-weight: 1.3rem;
                font-weight: normal;
            }
        }
        .right {
            display: flex;
            justify-content: left;
            align-items: center;
            flex: 1 1 50%;
            gap: 70px;
            .quantity {
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #e1e1e1;
                border-radius: 8px;
                padding: 0 10px;
                height: 40px;
            }
            input {
                border: none;
                width: 90px;
                height: 38px;
                color: #111;
                font-size: 1.2rem;
                font-weight: 500;
                text-align: center;
                outline: none;
            }
            button {
                border: none;
                background: 0 0;
                color: #999;
                cursor: pointer;
                font-size: 24px;
            }
            .price,
            .trash {
                font-size: 1.2rem;
            }
            .price {
                font-weight: bold;
            }
            .trash {
                color: lightgray;
                cursor: pointer;
            }
        }
    }
    .total-price {
        margin: 50px 5px;
        text-align: right;
        font-size: 1.5rem;
        font-weight: bold;
        span {
            color: #d30e15;
            font-weight: bolder;
        }
    }
    .order-form {
        display: flex;
        justify-content: right;
        align-items: center;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        div + div {
            margin-left: 30px;
        }
        div {
            width: 250px;
            background-color: #006a31;
            padding: 15px 10px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 40px;
            cursor: pointer;
            justify-content: space-around;
        }
        div:hover {
            span {
                text-decoration: underline;
            }
        }
        .arrow-icon {
            color: white;
        }
        .prev {
            background-color: #738c80;
        }
    }
`;
