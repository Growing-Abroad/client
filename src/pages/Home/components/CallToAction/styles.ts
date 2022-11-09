import { theme } from "@/styles/theme";
import styled from "styled-components";

import { variables } from "@/styles/global-variables";

export const Container = styled.section`
    width: 100%;
    height: 70vh;

    display: flex;
    align-items: center;

    background-color: ${theme.colors.secondaryBlue};

    .left-side {
        flex-direction: column;

        width: 50%;

        padding: 2rem;

        h1 {
            color: #fff;
            font-size: 5rem;
            text-shadow: 4px 2px 8px #000;

            height: 70%;
                
            .verde {
                color: #FFDB5C;
            }

            .azul {
                color: #05335B;
            }
        }

        button {
            margin-top: 2rem;
            padding: 0px 10px;
            height: 50px;

            border-radius: 8px;

            font-size: 1.5rem;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .right-side {
        position: relative;
        height: 100%;
        width: 50%;

        flex-direction: row;
        justify-content: space-between;
        img {
            max-height: 85%;
            position: absolute;
            bottom: 0;
        }

        .to-right {
            right: -3rem;
        }
    }
    
    @media (max-width: ${variables.sizes.mediaQuery}) {
        .left-side {
            width: 100%;

            h1 {
                font-size: 3rem;
            }
        }

        .right-side {
            display: none;
        }
    }
`