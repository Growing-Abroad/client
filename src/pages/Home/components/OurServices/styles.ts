import styled from 'styled-components';
import { variables } from '@styles/global-variables';

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 2rem;
  overflow-x:hidden;
`