import styled from "styled-components";
import { variables } from "@/styles/global-variables";
import { style } from "@mui/system";
import { theme } from "@/styles/theme";

const { sizes: { globalHorizontalPadding, maxWidthAll}} = variables;
const { colors: {blue700} } = theme; 

export const HeroTitleWrapper = styled.div`
    padding: 108px 0px 0px ${globalHorizontalPadding};
    max-width: ${maxWidthAll};
    width: 100%;
`

export const CardsWrapper = styled.div`
    display: flex;
    gap: 55px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 36px 0 176px;
`

export const Card = styled.div`
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
    width: 157px;
    min-height: 176px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1.3px;
    color: ${blue700};
    padding: 16px 8px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

