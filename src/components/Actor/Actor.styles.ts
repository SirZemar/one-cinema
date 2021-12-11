import styled from "styled-components";
// Types 
type Props = {
    isMouseOver: boolean;
};

const Wrapper = styled.div`
    color:var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    height: 280px;

    h3 {
        margin: 10px 0 0 0;
    }

    p {
        margin: 5px 0;
    }

`;

const Image = styled.img<Props>`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    transition: 0.2s;
    height: ${({ isMouseOver }) => isMouseOver
        ? '100%'
        : '200px'
    };
    object-position:  ${({ isMouseOver }) => isMouseOver
        ? 'top'
        : 'center'
    };
`;

export {
    Wrapper,
    Image
}