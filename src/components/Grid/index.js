import React from "react";
import { Content, Wrapper } from "./Grid.styles";

const Grid = ({ children }) => {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Grid;
