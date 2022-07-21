import styled from "styled-components";

export const Wrapper = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    .header {
        position: relative;
    }
    .menu-title {
        font-size: 2.2rem;
        font-weight: bold;
        margin: 10px 0;
    }
    .menu-title:hover {
        cursor: pointer;
        color: #006a31;
    }
    .main-title {
        font-size: 2.2rem;
        padding: 15px 0;
        font-weight: bold;
        margin-top: 20px;
    }
    .main-title::before {
        position: absolute;
        content: "";
        width: 26px;
        height: 3px;
        top: 0;
        left: 0;
        background-color: #006a31;
    }
    .loading-more-button {
        width: 100%;
        padding: 5px 0;
        margin: 20px 0px 0px 0px;
        font-size: 1.1rem;
        cursor: pointer;
        font-weight: 500;

        span {
            font-size: 1.2rem;
            font-weight: bold;
        }
        border: none;
        :hover {
            background-color: #e8f5ee;
            color: #006a31;
        }
    }
`;
