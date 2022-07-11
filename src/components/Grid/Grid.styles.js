import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    /* grid-gap: 2rem; */
`;
