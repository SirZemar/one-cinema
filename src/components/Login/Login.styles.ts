import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    cursor: pointer;
    user-select: none;
    margin: 0 10px;

    .login-status {
        max-width: 250px;
        margin-left: auto;

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