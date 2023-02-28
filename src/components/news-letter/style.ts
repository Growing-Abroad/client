import styled from 'styled-components';
import { Input } from '@/styles/global-styles';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';


const {
  colors: { primaryBlue, secondaryBlue },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;
const boxSize = 20;

export const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;

  @media (max-width: ${mediaQuery}) {
    align-items: center;
    max-width: 225px;
    flex-direction: column;
  }
`;
export const InputNewsLetter = styled(Input)`
 width: 585px;
 max-height: 64px;
 border-radius:50px;
`
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
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: ${0}px;
    left: 0;
    height: ${boxSize}px;
    width: ${boxSize}px;
    border-radius: 4px;
    outline: 1px solid ${primaryBlue};
    background-color: white;

    @media (max-width: ${mediaQuery}) {
      top: ${42 / 2 - boxSize / 2}px;
    }
  }

  &:hover input ~ span {
    background-color: #eee;
  }

  & input:checked ~ span {
    background-color: ${secondaryBlue};
  }

  & span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
  left: 7px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`;
