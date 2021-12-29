import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    cursor: pointer;
    user-select: none;
    margin: 0 10px;
    max-width: 35%;

    .login-status {
        height: 1rem ;
        /* overflow: hidden; */

        :hover {
        color: var(--medGrey);
        }

        .text  {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            :before {
                content: '||| ';
            }
        }
    }
    }
`;


export {
    Wrapper
}