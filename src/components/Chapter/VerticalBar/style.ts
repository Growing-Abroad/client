import styled from "styled-components";

interface VerticalBarProps {
  backgroundColor?: string;
  color?: string;
  height?: string;
}

export const VerticalBar = styled.div<VerticalBarProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  transition: all 0.4s ease-in-out;
  width: 10px;
  height: 443px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: -3px 0;


  :last-child {
    height: 0;
  }

  @media (max-width: 758px) {
    height: ${(props) => `${props.height}`};
  }
`;

export const VerticaProgressBar = styled.div<VerticalBarProps>`
  width: 10px;
  background-color: ${(props) => props.backgroundColor};
  transition: all 0.4s ease-in-out;
  height: ${(props) => `${props.height}`};
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  position: absolute;
  margin: -3px 0;
  top: 0;
  left: 0;
`;

export const IndexCircle = styled.div<VerticalBarProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  transition: all 0.4s ease-in-out;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  z-index: 2;

  @media (max-width: 758px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const IndexCircleProgress = styled.div<VerticalBarProps>`
  width: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  height: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  z-index: 2;
  position: absolute;
  opacity: 0;

  @media (max-width: 758px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;
