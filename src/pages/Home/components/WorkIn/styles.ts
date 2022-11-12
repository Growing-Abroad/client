import styled from "styled-components";
import { theme } from "@/styles/theme";
import { variables } from "@/styles/global-variables";

export const Container = styled.section`
    width: min( 100%, ${variables.sizes.maxWidthAll});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 12px;

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

    @media(max-width: ${variables.sizes.mediaQuery}) {
        flex-direction: column;
    }
`

export const Card = styled.article`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 24px;
        margin-bottom: 8px;
    }
    
    img {
        width: 320px;
    }

    article {
        width: 320px;
        text-align: center;
        margin-bottom: 12px;
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