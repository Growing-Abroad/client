import styled from "styled-components";
import { breakpoints } from "utils/constants";

export const Container = styled.main`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    width: 100%;
    margin-top: 60px;

    background: white;

    & > * {
        padding: 0 40px;

        @media (min-width: ${breakpoints.desktop.max}px) {
            padding: 0 50px;
        }
    }

    @media (min-width: ${breakpoints.desktop.max}px) {
        margin-top: 90px;
    }
`
