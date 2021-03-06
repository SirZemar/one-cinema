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
    overflow: hidden;
    height: 100%;
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
    object-fit: cover;
    border-radius: 15px;
    transition: 0.2s;
    height: ${({ isMouseOver }) => isMouseOver
        ? '100%'
        : '80%'
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