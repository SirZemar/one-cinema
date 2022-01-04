import styled from "styled-components";
// Images
import Lights from "../../images/lights.png"
import Beams from "../../images/beam-lights.png"
import Stage from "../../images/light-dark.jpg"

const Wrapper = styled.div`
    padding: 40px 20px ;
    background-image: url(${Lights}), url(${Stage});
    background-size: contain, cover;
`;

const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    max-height: 600px;
`;

const Thumb = styled.div`
    position: relative;
    border-radius: 20px;
    background-color: var(--darkGrey);
    background-image: url(${Beams});
    background-size: 300% 150%;
    background-position: center -200px ;
 
    img {
        mix-blend-mode: overlay;
        padding: 5px;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        width: 100%;
        min-width: 300px;
        max-width: 400px;
    } 

`;

const Text = styled.div`
    display:flex;
    flex-direction: column;
    padding: 20px 40px;
    background: rgba(0,0,0,0.7);
    border-radius: 20px;
    max-width: 600px;
    max-height: 100%;

    h2 {
        margin-bottom: 0;

        ::after {
            content: '';
            display: block;
            height: 2px;
            width: 300px;
            background-color: var(--primary);
            margin-top: 20px;
        }
    }
    p {
        overflow: scroll;
        overflow-x: hidden; 

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
