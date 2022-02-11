import styled from "styled-components";
// Images
import Lights from "../../images/lights.png"
import Beams from "../../images/beam-lights.png"
import Stage from "../../images/light-dark.jpg"
// Helpers
import { clamp } from "../../helpers";

const Wrapper = styled.div`
    padding: 40px 20px ;
    background-image: url(${Lights}), url(${Stage});
    background-size: contain, cover;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 100px;
    animation: animatePersonInfo 0.8s;

    @keyframes animatePersonInfo {
        from {
            opacity: 0
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0;
        flex-direction: column;
        align-items:center;

    }
`;

const Thumb = styled.div`
    position: relative;
    border-radius: 20px;
    background-color: var(--darkGrey);
    background-image: url(${Beams});
    background-size: 300% 200%;
    background-position: center -200px ;
 
    img {
        mix-blend-mode: overlay;
        width: 100%;
        height:100%;
        min-width: 300px;
        max-width: 400px;
        padding: 5px;
        object-fit: cover;
        border-radius: 20px;
    } 

`;

const Text = styled.div`
    display:flex;
    flex-direction: column;
    flex-basis: 100%;
    max-width: 600px;
    padding: 20px 40px;
    background: rgba(0,0,0,0.7);
    border-radius: 20px;
    max-height: 600px;

    h1 {
        color:var(--primary);
    }
    h2 {
        margin-bottom: 0;
        font-size: ${({ theme }) => clamp(theme.size.med, theme.size.big, theme.break.M, { endQuery: theme.break.XL })};

        ::after {
            content: '';
            display: block;
            height: 2px;
            max-width: 300px;
            background-color: var(--primary);
            margin-top: 20px;
        }
    }
    p {
        padding-right: 10px;
        overflow: scroll;
        overflow-x: hidden; 
        height: 30ch;

        ::-webkit-scrollbar {
        width: 5px;
        }
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #ddd; 
        border-radius: 15px;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--primary); 
            border-radius: 15px;
        }
    }
`;

export {
    Wrapper,
    Content,
    Thumb,
    Text
}
