import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    position: relative;
    .header {
        text-transform: capitalize;
    }
    .value {
        scroll-margin-top: 185px;
    }
    .types {
        position: sticky;
        z-index: 80;
        top: 150px;
        display: flex;
        padding: 3px 15px;
        justify-content: space-evenly;
        align-items: center;
        background-color: #f5f5f5;
        border-radius: 8px;
        .type-name {
            min-width: fit-content;

            width: 200px;
            padding: 3px 20px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            color: white;
            &:hover {
                background-color: #d50e15;
                color: white !important;
                border-radius: 10px;
                transition: none;
                transition: background-color 0.5s;
            }
            &:visited {
                color: inherit;
            }
        }
    }
    .marker {
        background-color: #d50e15;
        position: absolute;
        width: 200px;
        left: 0;
        z-index: -1;
        transition: 0.5s linear;
        border-radius: 10px;
    }
    .active {
        background-color: #d50e15;
        color: white !important;
        border-radius: 10px;
    }
`;
