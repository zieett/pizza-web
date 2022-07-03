import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--white);
    padding: 0 20px;
    position: fixed;
    width: 100%;
    top: 0;
    margin: 13px 0px;
    font-size: var(--fontSmall);
    display: block;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

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
        padding: 0 20px;
        ul {
            display: flex;
            list-style-type: none;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            font-weight: bold;
            color: var(--white);
            li {
                cursor: pointer;
            }
            li + li {
                padding-left: 35px;
            }
        }
    }
    .right-content {
        padding-right: 10px;
        display: flex;
        align-items: center;
        & > * {
            padding: 0 10px;
        }
        .search-box {
            cursor: pointer;
        }

        .cart {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 5px 10px;
            color: #167743;
            font-weight: bold;
            border-radius: 20px;
            span:nth-child(3) {
                padding-left: 5px;
            }
        }
    }
`;
