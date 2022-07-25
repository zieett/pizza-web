import styled from "styled-components";

export const Wrapper = styled.div`
    /* &:not(:last-child) {
        margin-right: 15px;
    } */

    & {
        margin-right: 30px;
    }
    &:hover {
        color: #006a31;
    }
    .image {
        margin: 20px auto;
        cursor: pointer;
    }
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(10deg);
        }
    }
    .image:hover {
        animation: rotation 0.2s linear forwards;
        overflow: hidden;
    }
    .title {
        font-weight: bolder;
        cursor: pointer;
    }
    .title:hover {
        text-decoration: underline;
    }
    .description {
        color: grey;
        height: 60px;
        margin: 3px 0;
    }
    .bottom-description {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: black;

        .left-content-price {
            font-size: 1.4rem;
            font-weight: bold;
        }
        .right-content {
            display: flex;
            align-items: center;
            color: #1b7a47;
            font-size: 1.3rem;
            font-weight: 400;
            border: 1px solid #006a31;
            padding: 5px 10px;
            border-radius: 10px;
            cursor: pointer;
            & > * {
                margin: 0 7px;
            }
            &:hover {
                background: red;
                color: white;
                border: none;
            }
        }
    }
`;
