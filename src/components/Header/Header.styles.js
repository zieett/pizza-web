import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--white);
    padding: 0 20px;
    position: fixed;
    width: 100%;
    top: 0;
    font-size: var(--fontSmall);
    display: block;
    z-index: 999;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    min-width: var(--maxWidth);
    margin: 0 auto;
    padding-bottom: 20px;
`;

export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    img {
        cursor: pointer;
    }
    .mid {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    .shipping {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        background-color: var(--lightGrey);
        border-radius: 18px;
        /* gap: 1px; */
        color: #333;
        font-weight: 100 !important;
        .form-radio {
            label {
                height: 100%;
                width: 100%;
                border-radius: 18px;
                border-style: unset;
                padding: 3px 15px;
                position: relative;
                display: flex;
                align-items: center;
                transition: all 0.2s ease-in-out;
                gap: 5px;
                cursor: pointer;
            }
            input[type="radio"] {
                display: none;
            }
            label:before {
                position: absolute;
                content: "";
            }

            input[type="radio"]:checked + label {
                background-color: #d50e15;
                color: white;
            }
            span {
                font-weight: 300;
            }
        }
    }
    .search-address {
        position: relative;

        .search-icon {
            position: absolute;
            top: 9px;
            left: 12px;
        }
        input {
            padding: 4px 4px 4px 30px;
            border-radius: 17px;
            outline: none;
            width: 230px;
            font-size: var(--fontSmall);
        }
    }
    .login > * {
        margin: 0 2px;
        font-weight: 500;
    }
    .login span {
        cursor: pointer;
    }
`;
export const HeaderBot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #006a31;
    margin: 5px 0;
    border-radius: 30px;
    font-size: var(--fontSmall);
    .left-content {
        ul {
            display: flex;
            list-style-type: none;
            /* align-items: center; */
            justify-content: space-between;
            padding: 0;
            font-weight: bold;
            color: var(--white);
            li {
                cursor: pointer;
                padding: 0px 17px;
            }
            li:hover {
                background-color: #005226;
                border-radius: 10px;
            }
            .has-sublist {
                position: relative;
                /* padding-left: 35px; */

                margin-bottom: 0;
                .dropdown {
                    position: absolute;
                    top: 35px;
                    left: 0;
                    background-color: #005226;
                    border-bottom-left-radius: 17px;
                    border-bottom-right-radius: 17px;
                    text-transform: capitalize;
                    transition-delay: 0.1s;
                    visibility: hidden;
                    opacity: 0;
                }
                .dropdown-menu {
                    width: 220px;
                    font-size: 1.1rem;
                    font-weight: 400;
                    padding: 13px 15px;
                }

                .dropdown-menu:hover {
                    background-color: #006a31;
                }
                .dropdown-menu:hover:last-child {
                    border-bottom-left-radius: 17px !important;
                    border-bottom-right-radius: 17px !important;
                }
            }
            .has-sublist:hover > .dropdown {
                visibility: visible;
                opacity: 1;
                transition-delay: 0s;
            }
            .has-sublist:hover {
                border-radius: 0px;
                border-top-left-radius: 17px;
                border-top-right-radius: 17px;
                background-color: #005226;
            }
            .has-sublist:hover::before {
                content: "";
                width: 100%;
                height: 15px;
                background: #005226;
                position: absolute;
                bottom: -16px;
                left: 0;
                z-index: 0;
                pointer-events: none;
            }
        }
    }
    .right-content {
        padding-right: 10px;
        display: flex;
        align-items: center;
        position: relative;
        & > * {
            padding: 0 10px;
        }
        .search-icon {
            cursor: pointer;
            position: relative;
            background: unset;
            border: unset;
            width: fit-content;
        }
        .active {
            display: block !important;
        }
        .search-bar {
            position: absolute;
            top: 48px;
            right: 120px;
            display: none;
            input {
                border-radius: 20px;
                border-color: #00b041;
                outline: none;
                width: 300px;
                padding: 8px 25px 8px 20px;
                font-size: 1.05rem;
            }
        }

        .cart {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 5px 10px;
            color: #167743;
            font-weight: bold;
            border-radius: 20px;
            position: relative;
            .text {
                cursor: pointer;
            }
            .number {
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
                border-radius: 12px;
                background: #d50e15;
                padding: 4px;
                min-width: 24px;
                height: 24px;
                color: #fff;
                line-height: 1;
            }
            span:nth-child(3) {
                padding-left: 5px;
            }
            .cart-mini {
                position: absolute;
                width: 480px;
                background-color: white;
                top: 100%;
                right: 0;
                color: black;
                text-align: center;
                box-shadow: 0 0 15px rgb(0 0 0 / 15%);
                display: none;
                padding-top: 4px;
                background: none;
                display: none;
            }
            .cart-mini-wrapper {
                background-color: white;
                padding: 10px;
                position: relative;
                border-radius: 3px;
                overflow-y: scroll;
                max-height: 700px;
                h2 {
                    font-size: 1.5rem;
                }
                p {
                    font-weight: 500;
                    span {
                        color: red;
                        font-weight: bold;
                    }
                }
            }
            .cart-mini::before {
                content: " ";
                position: absolute;
                top: -12px;
                left: auto;
                right: 17px;
                border: solid transparent;
                height: 0;
                width: 0;
                pointer-events: none;
                border-color: rgba(255, 255, 255, 0);
                border-bottom-color: white;
                border-width: 8px;
                margin-left: -8px;
            }
        }
        .cart:hover .cart-mini {
            display: block;
        }
        .cart-item {
            border-bottom: 1px solid lightgray;
            margin: 10px auto;
            padding: 10px 15px;
            width: 95%;
        }
        .cart-mini-wrapper-top {
            display: flex;
            img {
                width: 80px;
                height: 80px;
                text-align: center;
            }
            .cart-mini-wrapper-detail {
                width: 100%;
                display: flex;
                flex-direction: column;
                margin: 0 15px;
                .top {
                    width: 100%;
                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 1.5rem;
                        text-align: left;
                        .trash {
                            color: lightgray;
                            font-size: 1.3rem;
                            cursor: pointer;
                        }
                    }
                }
                .bot {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .amount {
                        color: gray;
                    }
                }
            }
        }
        .cart-mini-wrapper-bot {
            display: flex;
            flex-direction: column;
            padding: 5px 10px;
            background-color: #f6f6f6;
            border-radius: 0 0 3px 3px;
            gap: 10px;

            .total-price-wrapper {
                display: flex;
                justify-content: space-between;
                padding: 10px;
                align-items: center;
                .total-price {
                    font-weight: bolder;
                    color: #d50e15;
                    font-size: 1.5rem;
                }
            }
            .payment {
                width: 100%;
                background-color: #006a31;
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                span {
                    text-align: center;
                    color: white;
                    vertical-align: center;
                }
            }
            .payment:hover {
                background-color: #d50e15;
            }
        }
    }
`;
