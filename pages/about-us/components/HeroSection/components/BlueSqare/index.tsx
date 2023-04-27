import React, { ReactNode } from "react";

import {
  Square,
  Content,
  TypeOfBlueSquare,
  SquareContainer,
} from "@/../../styles/about-us/components/HeroSection/components/BlueSquare/index.styles";

interface Props {
  type: TypeOfBlueSquare;
  children?: ReactNode;
}

function BlueSquare({ children, type }: Props) {
  return (
    <SquareContainer type={type}>
      <Square type={type}>
        <Content type={type}>{children}</Content>
      </Square>
    </SquareContainer>
  );
}

export default BlueSquare;
