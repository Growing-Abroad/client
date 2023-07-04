import Image from "next/image";
import styled from "styled-components";

export const ContainerProgressBar = styled.div`

  width: 100%;
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}



.stub2 {
  height: 1000px;
}

.circleWrapper {
  position: relative;
} 
`;

export const CardTitle = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  width: 506px;
  letter-spacing: 1.3px;
  font-weight: 600;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: #fff;
  font-size: 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Timeline = styled.div`
  width: 10px;
  margin-left: 15px;
  margin-top: -2px;
`

export const UIImage = styled(Image)`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`

export const ItemContent = styled.div`
  margin-top: -20px;
`