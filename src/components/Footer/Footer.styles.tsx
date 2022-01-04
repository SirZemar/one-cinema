import styled from "styled-components";

const Wrapper = styled.div`
    background-color: var(--darkGrey);
    width:100%;
`;

const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 20px 0;

    p {
        text-align: right;
        margin: 0;
    }
`;

export {
    Wrapper,
    Content
}