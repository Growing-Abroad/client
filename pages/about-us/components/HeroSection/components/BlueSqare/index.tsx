import React, { ReactNode } from "react";

import {
  Square,
  Content,
  TypeOfBlueSquare,
} from "@/../../styles/about-us/components/HeroSection/components/BlueSquare/index.styles";

interface Props {
  type: TypeOfBlueSquare;
  children?: ReactNode;
}

function BlueSquare({ children, type }: Props) {
  return (
    <Square type={type}>
      <Content type={type}>{children}</Content>
    </Square>
  );
}

export default BlueSquare;
