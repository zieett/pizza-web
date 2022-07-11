import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #006a31;
    margin-top: 30px;
`;

export const FooterTop = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    display: flex;
    /* align-items: flex-start; */
    /* flex-wrap: wrap; */
    .row {
        flex: 0 0 25%;

        padding: 40px 15px;
        max-width: 25%;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        color: white;
        h2 {
            font-weight: bolder;
        }
        h4 {
            font-weight: normal;
            margin: 15px 0;
            span {
                font-weight: bold;
            }
            :hover:not(.address) {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
    .row + .row {
        margin-left: 15px;
    }
    .row-1 {
        text-align: center;

        img {
            width: 230px;
            height: 190px;
        }
    }
    .icon {
        margin: 0 5px;
        font-size: 1.3rem;
        border-radius: 50%;
        border: 1px solid hsla(0, 0%, 100%, 0.5);
        padding: 4px 9px;
    }
    .row-4 {
        img {
            margin-top: 10px;
            width: 140px;
            height: 50px;
            max-width: 100%fit-content;
        }
        div {
            margin-top: 10px;
        }
    }
`;

export const FooterBot = styled.div`
    text-align: center;
    padding: 5px;
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 0.9rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
