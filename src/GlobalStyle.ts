import { createGlobalStyle } from "styled-components";
// Helpers
import { clamp } from "./helpers";

export const GlobalStyle = createGlobalStyle<any>`
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
        font-weight: 600;
        color:var(--white);
        font-size: ${({ theme }) => clamp(theme.size.bigger, theme.size.biggest, theme.break.L, { endQuery: theme.break.breakXL })}
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color:var(--white);
        font-size: ${({ theme }) => clamp(theme.size.big, theme.size.bigger, theme.break.L, { rate: 1 })};

    }
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color:var(--white);
        font-size: ${({ theme }) => clamp(theme.size.small, theme.size.med, theme.break.M, { endQuery: theme.break.breakXL })};
    }

    p {
        color: var(--white);
        font-size: ${({ theme }) => clamp(theme.size.small, theme.size.med, theme.break.L, { endQuery: theme.break.breakXL })}
    }
}
`