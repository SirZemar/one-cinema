import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGrey);
    color: var(--white);

`;

const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 0 20px;
    max-width: var(--maxWidth);

    
    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }

    a {
        text-decoration: none;
    }
    
`;

export {
    Wrapper,
    Content
}
