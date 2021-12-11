import styled from "styled-components";

const Spinner = styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }

    }
`;

export default Spinner