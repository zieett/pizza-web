import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
    position: relative;

    .slick-arrow {
        z-index: 200;
        background: none;
        opacity: 0.5;
    }
    .slick-arrow:hover:before {
        color: green;
    }
    .slick-prev {
        left: 300px;
    }
    .slick-prev:before {
        color: black;
        opacity: 0.8;
        font-size: 50px;
    }
    .slick-next:before {
        color: black;
        opacity: 0.8;
        font-size: 50px;
    }
    .slick-next {
        right: 300px;
    }
    .slick-slide {
        /* width: 1110px !important; */

        /* width: 1110px !important; */
        div {
            border-radius: 15px;
        }
        img {
            padding: 15px 20px;
            opacity: 0.5;
            border-radius: 35px;
        }
    }

    .slick-current {
        img {
            opacity: 1;
        }
    }
    /* .slick-slide {
        border-radius: 20px;
    }
    /* max-width: var(--maxWidth);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin: 0 auto;
    img {
        width: 100%;
        height: 600px;
        border-radius: 20px;
    }
    .left-arrow {
        position: absolute;
        top: 50%auto;
        left: -95px;
        font-size: 3rem;
        cursor: pointer;
        user-select: none;
        opacity: 0.5;
    }
    .right-arrow {
        position: absolute;
        top: 50%auto;
        right: -90px;
        font-size: 3rem;
        z-index: 10;
        cursor: pointer;
        user-select: none;
        opacity: 0.5;
    }
    .arrow:hover {
        color: green;
    } */
`;
