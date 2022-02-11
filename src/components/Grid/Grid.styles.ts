import styled from "styled-components";

const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h2 {
        color: var(--medGrey);
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 1rem;
    }
`;

export {
    Wrapper,
    Content
}