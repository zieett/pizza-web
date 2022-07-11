import styled from "styled-components";

export const Wrapper = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    /* & > * {
        padding: 0 20px;
    } */
    h1 {
        font-weight: bold;
    }
    .slick-arrow {
        color: black;
        border-right: 50%;
        border-radius: 50%;
        opacity: 0.5;
    }
    .slick-arrow:hover {
        opacity: 1;
        color: green !important;
    }
    .slick-arrow::before {
        color: black !important;
        background-color: white;
        border-radius: 50%;
        font-size: 4.5rem;
        z-index: 20;
        position: absolute;
    }
    .slick-prev {
        left: -6%;
        /* color: red !important; */
    }
    .slick-prev::before {
        /* content: ""; */
    }
    .slick-slide {
        max-width: 100%;
        /* margin: 0 20px; */
    }
    .image {
        margin: 0 auto;
        cursor: pointer;
        width: 310px;
        height: 310px;
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
    }
    .title {
        font-weight: bolder;
        cursor: pointer;
    }
    .title:hover {
        text-decoration: underline;
    }
    .slick-slide:hover .title {
        color: #006a31;
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
        }
    }
`;
