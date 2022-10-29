import styled from 'styled-components';
import { theme } from '../../styles/theme';

const {
  colors: { secondaryBlue },
} = theme;
const boxSize = 25;

export const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
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
    top: ${42 / 2 - boxSize / 2}px;
    left: 0;
    height: ${boxSize}px;
    width: ${boxSize}px;
    border-radius: 4px;
    background-color: #eee;
  }

  &:hover input ~ span {
    background-color: #ccc;
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
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`;
