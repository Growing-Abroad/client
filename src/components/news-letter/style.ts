import styled from 'styled-components';
import { theme } from '../../styles/theme';

const {
  colors: { primaryBlue, secondaryBlue },
} = theme;
const boxSize = 20;

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
