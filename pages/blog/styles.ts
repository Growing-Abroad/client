import styled from "styled-components";
import {variables} from "@styles/global-variables";
import {theme} from "@styles/theme";

const { sizes: { globalHorizontalPadding, mediaQuery, globalHorizontalPaddingMobile } } = variables;
const { colors: { blue400, blue500, blue700, yellow400 } } = theme;

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  padding: 0 140px;
  color:blue700;

  @media (max-width: ${mediaQuery}) {
    padding: 0 40px;
  }
`
