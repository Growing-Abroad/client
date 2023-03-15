import styled from "styled-components";
import {variables} from "@styles/global-variables";
import {theme} from "@styles/theme";

const { sizes: { globalHorizontalPadding, mediaQuery, globalHorizontalPaddingMobile } } = variables;
const { colors: { blue400, blue500, blue700, yellow400 } } = theme;

export const Container = styled.div`
  width: 100%;
  padding: 0 ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {

  }
`