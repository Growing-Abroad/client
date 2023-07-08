import styled from "styled-components";



export const PageBody = styled.div`
    position: relative;
    z-index: 2;
    margin-top: calc(250px + 60px);
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 430px) {
        margin-top: calc((15.625rem + ((1vw - 4.3px) * 30.4709) + 60px));
    }
    @media (min-width: 1513px) {
        margin-top: calc(580px + 90px);
    }
`
