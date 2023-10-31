import styled from 'styled-components';

import { variables } from '@/styles/global-variables';
const { sizes: { mediaQuery, maxWidthAll, globalHorizontalPadding }} = variables;

export const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: ${maxWidthAll};
  width: 100%;
  height: 100%;
  gap: 29px;
  padding: 40px ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {
    max-width: 100%;
    padding: 27px 16px 83px;
  }
`
export const FaqSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color:#F7F7FB;
  border-radius: 20px;
  gap: 16px;
  padding: 50px 172px;
  zoom: 0.75;

  @media (max-width: ${mediaQuery}) {
    padding: 44px 28px 40px;
  }
`
