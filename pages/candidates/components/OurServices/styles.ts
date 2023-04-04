import styled from 'styled-components';
import {variables} from "@styles/global-variables";

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 80px ${variables.sizes.globalHorizontalPadding};
  overflow-x:hidden;
  height: 1050px;

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px 6px;
  }
`