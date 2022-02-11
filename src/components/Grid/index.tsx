import React from "react";
// Styles
import { Wrapper, Content } from "./Grid.styles";
// Types
type Props = {
    header: string;
}
const Grid: React.FC<Props> = ({ header, children }) => {

    return (
        <Wrapper>
            <h2>{header}</h2>
            <Content>{children}</Content>
        </Wrapper>
    )
};

export default Grid;