import React from "react"
import * as S from "./styles"



function VisionAndMission() {
  return (
    <S.Container>
      <S.LeftContent>
        <S.TextContainer color="white" background="blue">
          <h3 color="white">Mission</h3>
          <p>
            Our Mission is to show people how to grow and rise up to their full potential to make their dreams come true.
          </p>
        </S.TextContainer>
      </S.LeftContent>

      <S.TextContainer>
        <h3>Vision</h3>
        <p>
          Our Vision is to create a platform that brings people together as a community with similar goals, where people can share their stories and inspire others.
        </p>
      </S.TextContainer>

    </S.Container>
  )
}

export default VisionAndMission
