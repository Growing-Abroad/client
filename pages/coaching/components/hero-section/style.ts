import styled from "styled-components";
import { variables } from "@/styles/global-variables";

const { sizes: { globalHorizontalPadding, maxWidthAll}} = variables;

export const HeroTitleWrapper = styled.div`
    padding: 108px 0px 0px ${globalHorizontalPadding};
    max-width: ${maxWidthAll};
    width: 100%;
`