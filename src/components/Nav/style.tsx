import styled from 'styled-components';

import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const Line = styled.hr`
  width: 100%;
  color: ${blue700};
  border-bottom: 2px solid ${blue700};
  margin: 0;
  padding: 0;
  background-color: ${blue700};
  opacity: 1;
  @media (max-width: ${mediaQuery}) {
    margin-bottom:62px;
  }
`;
export const NavHero = styled.nav`
  display: flex;
  gap: 48px;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  min-width: 1280px;
  padding: 0px 140px;
  height: 3rem;
  @media (max-width: ${mediaQuery}) {
    min-width: 100%;
    gap: 12px;
    height: 162px;
    padding: 0 32px 0 42px;
  }
`;
export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  height: 100%;
  padding: 0;
  @media (max-width: ${mediaQuery}) {
    max-width: 430px;
    display: grid;
    height:131px;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 32px;
    justify-content: space-between;
    margin:0;
  }
`;
export const NavItem = styled.li`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1.3px;
  white-space: nowrap;
  min-width: max-content;
  color: ${blue700};
  padding: 0 0.7rem;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    margin-left: 172px;
  }

  @media (max-width: ${mediaQuery}) {
    padding: 0 1rem 0 0;
    text-align: start;
    &:first-child {
      padding-left: 0;
    }
    &:nth-child(4n){
      margin-left: 34px;
     }
    &:last-child {
      margin-left: 124px;
    }
  }
`;
export const SearchButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  align-self: start;
`;
