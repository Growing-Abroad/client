import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';
import StdButton from '@/components/generics/StdButton/StdButton';
const {
  sizes: { mediaQuery },
} = variables;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 120px 0 54px 0;
  color: ${theme.colors.blue700};
  height: auto;
  min-width: 100%;
  
  & div > h2 {
    margin: 0;
    height: 73px;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding: 65px ${variables.sizes.globalHorizontalPaddingMobile} 65px;
    gap: 32px;
    & div > h2 {
      margin: 0;
      height: 43px;
    }
  }
`;
export const SubHeadingBlog = styled.h4`
  letter-spacing: 1.3px;
  text-align: center;
  margin-bottom: 32px;
  font-weight: 400;
  

  @media (max-width: ${mediaQuery}) {
    width: 300px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.3px;
    text-align: center;
    margin-bottom: 0;
    height: 54px;
  }
`;
export const BlogCard = styled.div`
  row-gap: 45px;
  column-gap: 40px;
  padding-top: 32px;
  padding-bottom: 42px;
  max-width: 1817px;
  @media (max-width: ${mediaQuery}) {
    min-width: 100%;
    align-items: center;
    padding: 0 42px;
    row-gap: 23px;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const MoreNews = styled(StdButton)`
  max-width: 100vw;
  display: flex;
  width: 100%;
  padding: 8px 0;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: unset;
  margin: 0;
  justify-content: end;
  &:hover {
    background-color: #fff;
    color: #05335B;
  }

  &::after {
    margin-left: 4px;
    margin-top: 3px;
    content: url("data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.70312 1.07031L5.21875 0.554688C5.45312 0.34375 5.80469 0.34375 6.01562 0.554688L10.5859 5.10156C10.7969 5.33594 10.7969 5.6875 10.5859 5.89844L6.01562 10.4688C5.80469 10.6797 5.45312 10.6797 5.21875 10.4688L4.70312 9.95312C4.49219 9.71875 4.49219 9.36719 4.70312 9.13281L7.53906 6.4375H0.8125C0.484375 6.4375 0.25 6.20312 0.25 5.875V5.125C0.25 4.82031 0.484375 4.5625 0.8125 4.5625H7.53906L4.70312 1.89062C4.49219 1.65625 4.46875 1.30469 4.70312 1.07031Z' fill='%2305335B'/%3E%3C/svg%3E%0A");
  }
  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 20px;
    &::after {
      margin-left: 4px;
      content: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.70312 1.07031L5.21875 0.554688C5.45312 0.34375 5.80469 0.34375 6.01562 0.554688L10.5859 5.10156C10.7969 5.33594 10.7969 5.6875 10.5859 5.89844L6.01562 10.4688C5.80469 10.6797 5.45312 10.6797 5.21875 10.4688L4.70312 9.95312C4.49219 9.71875 4.49219 9.36719 4.70312 9.13281L7.53906 6.4375H0.8125C0.484375 6.4375 0.25 6.20312 0.25 5.875V5.125C0.25 4.82031 0.484375 4.5625 0.8125 4.5625H7.53906L4.70312 1.89062C4.49219 1.65625 4.46875 1.30469 4.70312 1.07031Z' fill='%2305335B'/%3E%3C/svg%3E%0A");
    }
  }
`