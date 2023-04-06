import styled from 'styled-components';
import { Input } from '@/styles/global-styles';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';
import StdButton from '../generics/StdButton/StdButton';

const {
  colors: { yellow400, blue700, blue500, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;
const boxSize = 14;

export const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 26px;
  @media (max-width: ${mediaQuery}) {
    align-items: start;
    width: 100%;
    flex-direction: column;
  }
`;
export const TitleNewsLetter = styled.h2`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  color: ${white};
  @media (max-width: ${mediaQuery}) {
    width: 200px;
    height: auto;
    text-align: start;
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1vw;
  justify-content: space-between;
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap: 22px;
    align-items: start;
  }
`;
export const InputNewsLetter = styled(Input)`
  width: 50%;
  max-height: 64px;
  border-radius: 50px;
  border: transparent;
  padding: 16px 50px;
  outline: 0;

  @media (max-width: ${mediaQuery}) {
    width: 312px;
    max-height: 32px;
    font-size: 12px;
  }
`;

export const ContentInputNewsLetter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }
`;
export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap: 22px;
    align-items: start;
  }
`;

export const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: ${boxSize}px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    top: ${10}px;
    left: '10px';
    height: ${boxSize}px;
    width: ${boxSize}px;
    background-color: transparent;

    outline: 3px solid ${white};
    @media (max-width: ${mediaQuery}) {
      top: ${52 / 2 - boxSize / 2}px;
    }
  }
  &:hover input ~ span {
    background-color: #eee;
  }
  & input:checked ~ span {
    background-color: ${blue500};
  }
  & span:after {
    content: '';
    position: absolute;
    display: none;
  }
  & input:checked ~ span:after {
    display: block;
  }
  & span:after {
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
