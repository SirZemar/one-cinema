import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    aspect-ratio: 1/1;
    background: rgba(0,0,0, 0.6);
    /* background: rgba(225,173,33,0.5); */
    /* border: 3px solid var(--medGrey); */
    box-shadow: inset 0 0 5px 2px rgba(225,173,33, 0.5) ;
    border-radius: 20px;
    border: 1px solid rgb(225,173,33);
`;

const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   max-width: 320px;
   margin: 0 auto;
   padding: 20px;
   color: var(--white);
   height: 100%;

   input {
       width: 100%;
       height: 30px;
       border: 1px solid var(--darkGrey);
       border-radius: 20px;
       margin: 10px 0;
       padding: 10px;
   }

   .error {
       color: red;
       padding: 10px 0;
   }
`;

export {
    Wrapper,
    Content
};