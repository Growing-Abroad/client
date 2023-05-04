import styled from "styled-components";


export const PageBody = styled.div`
    position: relative;
    margin-top: 250px;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 758px) {
        margin-top: calc(15.625rem + ((1vw - 4.3px) * 30.4709));
    }
    @media (min-width: 800px) {
        margin-top: calc(580px + 90px);
    }
`
