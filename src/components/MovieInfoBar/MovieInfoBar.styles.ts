import styled from "styled-components";
// Helpers
import { clamp } from "../../helpers";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => clamp(theme.size.smallest, theme.size.biggest, theme.break.S, { rate: 2 })};
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        text-align: center;
        border-radius: 20px;
        flex:1;
        min-width: 50px;
    }
`;

export {
    Wrapper,
    Content
}