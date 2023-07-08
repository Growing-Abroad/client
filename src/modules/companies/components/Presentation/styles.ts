import styled from "styled-components";
import { breakpoints } from "utils/constants";

export const Container = styled.div`
    width: 100%;

    background: #128FC8;
    `;

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;

    width: 100%;
    max-width: 1414px;
    padding-top: 50px;
    margin: 0 auto;

    background: #128FC8;

    @media (min-width: ${breakpoints.desktop.max}px) {
        align-items: start;
        padding-top: 80px;
        padding-bottom: 150px;
    }
`;


export const Title = styled.h1`
    max-width: 520px;

    font-size: 2.75rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.25;
    color: white;

    text-shadow: 0 4px 4px #00000040;

    span {
        color: #05335B;

        &:first-of-type {
            color: #FFDB5C;
        }
    }

    @media (min-width: ${breakpoints.desktop.max}px) {
        text-align: left;
        max-width: 800px;
        font-size: 3.25rem;
    }
`;

export const Description = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    max-width: 350px;
    line-height: 1.75;
    color: white;

    @media (min-width: ${breakpoints.desktop.max}px) {
        text-align: left;
        max-width: 600px;
        font-size: 1.5rem;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 15px;
    border-radius: 2rem;

    font-size: 1rem;
    font-weight: 600;
    color: #05335B;
    background: #FFDB5C;

    box-shadow: 0 15px 30px #00000040;

    @media (min-width: ${breakpoints.desktop.max}px) {
        padding: 20px 40px;
        font-size: 1.25rem;
        border-radius: 3rem;
    }
`;

export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 650px;
    aspect-ratio: 1.4;

    overflow: hidden;

    @media (min-width: ${breakpoints.desktop.max}px) {
        position: absolute;
        bottom: 0;
        right: -5px;

        width: calc(100% - 500px);
        max-width: 784px;
    }
`;
