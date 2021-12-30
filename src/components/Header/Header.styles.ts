import styled from 'styled-components';

const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);
    height: 90px;

`;

const Logo = styled.div`
        position: relative;
        height: 100%;
        z-index: 1;

        .logo-image {
            position: relative;
            width: 50px;
            height: 100%;
            background: transparent;
            border-radius:50%;
            border: 1px solid var(--primary);
            border-width: 13px 7px 5px 7px;

            :before {
                content: '';
                display: block;
                position: absolute;
                bottom: -5px;
                left: -3px;
                height: 100%;
                width: 100%;
                border-radius: 0 50% 50% 50%;
                border: 1px solid white;
                border-width: 13px 7px 5px 7px;
                z-index: -2;
                mask-image: repeating-linear-gradient(
                    45deg,
                    #fff 1px,
                    #fff 1px,
                    transparent 3px,
                    transparent 3px
                );
            } 
            :after {
                content: '';
                display: block;
                position: absolute;
                bottom: -5px;
                left: -3px;
                height: 50px;
                width: 50px;
                z-index: -1;
                background: var(--darkGrey);
                mask-image: linear-gradient(135deg, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 80%);
            }
        }

        .logo-text {
            position: absolute;
            top: 20%;
            left: 30px;
            width: 200px;
            height: 100%;

            @media screen and (max-width: 500px) {
                width:  150px;
            }
        }
`

const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
       width: 80px; 
    }
`;

export {
    Wrapper,
    Content,
    TMDBLogoImg,
    Logo
}