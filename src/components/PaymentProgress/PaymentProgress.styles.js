import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    .step1 {
        .top,
        .card-wrapper {
            box-shadow: 0 7px 24px rgb(0 0 0 / 9%);
            border-radius: 10px;
            background-color: #fff;
            padding: 16px;
            width: 100%;
            /* height: 100%; */

            .title {
                font-size: 1.3rem;
                font-weight: bold;
                border-bottom: 1px solid lightgray;
                padding: 15px 0;
            }
        }
        .bot {
            display: flex;
            gap: 25px;
            margin-top: 25px;
        }
        .card-wrapper {
            position: relative;
            display: flex;
            flex: 1 1 50%;
            align-items: center;
            cursor: pointer;
            img {
                max-width: 100%;
                max-height: 100%;
                vertical-align: middle;
            }
            .content {
                width: 100%;
                margin-left: 15px;
            }
            .title {
                color: #006a31;
            }
            .body {
                margin-top: 15px;
                color: #111;
                font-size: 16px;
                font-weight: 500;
                line-height: 1.5;
                font-weight: 600;
                strong {
                    color: red;
                }
            }
        }
        .step1-active {
            position: absolute;
            display: block;
            top: 5px;
            right: 5px;
            i {
                display: flex;
                border-radius: 50%;
                background-color: #00b041;
                width: 25px;
                height: 25px;
                color: #fff;
                justify-content: center;
                align-items: center;
            }
        }
        .card-wrapper-active {
            border: 1px solid #00b041 !important;
        }
    }
    .step-class {
    }
    .progress-class {
        margin-bottom: 40px;
    }
    ._2Jtxm._35Ago ._2kL0S {
        background-color: #00b041 !important;
    }
    ._2Jtxm._35Ago div {
        color: #00b041;
    }
`;
