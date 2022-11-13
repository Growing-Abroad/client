import styled from "styled-components";
import { theme } from "@/styles/theme";
import { variables } from "@/styles/global-variables";

export const Container = styled.section`
    width: min( 100%, ${variables.sizes.maxWidthAll});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 26px;

    .title {
        font-size: 36px;
        font-weight: 600;
        margin: 16px 0px;

        span {
            color: ${theme.colors.secondaryBlue}
        }
    }

    @media(max-width: ${variables.sizes.mediaQuery}) {

    }
`
export const CardSpace = styled.section`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 16px;

    @media(max-width: ${variables.sizes.mediaQuery}) {
        flex-direction: column;
    }
`

export const Card = styled.article`
    width: 260px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    border-radius: 8px;
    box-shadow: 15px 15px 20px #aaa;

    h2 {
        font-size: 24px;
        margin-bottom: 8px;
        text-align: center;
    }
    
    img {
        width: 220px;
    }

    article {
        width: 220px;
        text-align: center;
        margin-bottom: 12px;
        font-size: 1rem;
        line-height: 20px;
    }

    @media(max-width: ${variables.sizes.mediaQuery}) {
        width: 100%;
        text-align: center;

        h2 {
            font-size: 20px;
        }

        img {
            width: 280px;
        }
    }
`