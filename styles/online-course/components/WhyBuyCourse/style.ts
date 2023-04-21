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
  padding: 89px 0px 262px 0px;
  gap: 81px;
  @media (max-width: ${mediaQuery}) {
    padding: 47px 0 161px;
    gap:12px;
  }
`;
export const Content = styled.div`
  width: 100%;
  min-width: 1280px;
  display: flex;
  gap: 72px;
  align-items: center;
  justify-content: space-between;
  &:first-child {
    top: 0;
    left: 0;
  }
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    min-width: 430px;
  }
`;
export const RightContent = styled.div`
  width: 613px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right:140px;
  gap: 20px;
  @media (max-width: ${mediaQuery}) {
    width:430px;
    padding: 46px;
    margin-right:0px;
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
