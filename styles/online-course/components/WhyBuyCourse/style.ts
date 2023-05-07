import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

const {
  colors: { blue700 },
} = theme;
const {
  sizes: { maxWidthAll, mediaQuery },
} = variables;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 89px 0px 146px 0px;
  gap: 81px;
  min-width: 1280px;
  @media (max-width: ${mediaQuery}) {
    padding: 47px 0 0px;
    gap:12px;
    min-width: 430px;
  }
`;
export const Content = styled.div`
  width: 100%;
  min-width: 1280px;
  display: flex;
  gap: 100px;
  align-items: center;
  padding-right:40px;
  justify-content: space-between;
  &:first-child {
    top: 0;
    left: 0;
  }
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    min-width: 430px;
    gap:0px;
    padding-right:0px;
  }
  @media (min-width: 1530px) {
    max-width: 1513px;
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 613px;
  gap: 20px;
  @media (max-width: ${mediaQuery}) {
    min-width:420px;
    padding: 0 30px;
    margin-right:0px;
    padding-top:49px;
    p{
      font-size:16px;
    }
  }
  @media (min-width:759px) and (max-width:1400px){
   gap:80px;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
`;
export const BoldSpan = styled.span`
  font-weight: 600;
  color: ${blue700};
`;
export const Text = styled.p`
  font-size: 20px;
  color: ${blue700};
`;
export const Icon = styled.span`
  width: 24px;
  height: 24px;
`;
