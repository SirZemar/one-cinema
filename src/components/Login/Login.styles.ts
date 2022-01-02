import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    user-select: none;
    margin: 0 10px;
    height: 70%;
    margin-left: auto;
    max-width: 350px;
    
`;

const Content = styled.div`
        display: flex;
        height: 100%;
        justify-content: center;

        .container {
            height: 100%;
            display: flex;
            align-items: flex-end;
            cursor: pointer;
            max-width: 100%;
        }
        
        .image-icon {
            position: relative;
            height: 65%;
            aspect-ratio: 1/1.3;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5px;
        }

        .image-icon-head {
            width: 70%;
            aspect-ratio: 1/1;
            background: transparent;
            border-radius:50%;
            border: 1px solid var(--primary);
            border-width: 4px 2px 1px 2px;
        }

        .image-icon-body {
            position: relative;
            background: var(--primary);
            width: 100%;
            aspect-ratio: 13/6;
            border-radius: 50% 50% 25% 25%;

            :before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: var(--darkGrey);
                clip-path: ellipse(5px 3px at 50% 0);
            }
        }

        .text  {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 5px;
            /* font-size: 1.3rem; */

            @media screen and (max-width: 500px) {
                text-align: center;
            }
        }
}
`

export {
    Wrapper,
    Content
}