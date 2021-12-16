import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    cursor: pointer;
    user-select: none;

    :hover {
        color: var(--medGrey);
    }
    span {
        padding: 0 10px;
    }
`;


export {
    Wrapper
}