import styled from 'styled-components';

import { variables } from '@/styles/global-variables';
const { sizes: { mediaQuery, maxWidthAll, globalHorizontalPadding }} = variables;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: ${maxWidthAll};
  width: 100%;
  height: 100%;
  gap: 29px;
  padding: 75px ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {
    max-width: 100%;
<<<<<<< HEAD
    padding: 27px 16px 83px;
=======
    padding: 65px 16px 50px;
>>>>>>> 5df65ebd2a62f3eb608c98b397e58d91272e460f
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color:#F7F7FB;
  border-radius: 20px;
  gap: 16px;
  padding: 50px 172px;

  @media (max-width: ${mediaQuery}) {
    padding: 44px 28px 40px;
  }
`
