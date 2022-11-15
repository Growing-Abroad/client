import { variables } from "@/styles/global-variables";
import styled from "styled-components";

const { sizes: { mediaQuery, globalHorizontalPadding, globalHoriznalPaddingMobile } } = variables;

export const TwoColorTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 600;
  width: max-content;
  font-size: 3.25rem;


  span {
    text-align: center;
  }

  @media (max-width: ${mediaQuery}) {
    justify-content: center;
    width: 100%;


    span {
      font-size: 2.5rem;
      text-overflow: wrap;
    }
  }
`