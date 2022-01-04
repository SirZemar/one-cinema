import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --medGreyRGB: 53,53,53; 
    --darkGrey: #1C1C1C;
    --darkGreyRGB: 28,28,28;
    --primary: #e1ad21;
    --primaryRGB: 225,173,33;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

* {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
}

body {
    margin: 0;
    padding: 0;

        ::-webkit-scrollbar {
        width: 10px;
        }
        ::-webkit-scrollbar-track {
        background: var(--darkGrey);
        box-shadow: inset 0 0 5px #ddd; 
        }

        ::-webkit-scrollbar-thumb {
            background: var(--primary); 
            border-radius: 15px;
        }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color:var(--white);
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color:var(--white);
    }
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color:var(--white);
    }

    p {
        font-size: 1rem;
        color: var(--white);
    }
}
`