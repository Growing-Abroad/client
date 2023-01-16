import React from "react"
import VisionAndMissionBackground from "../../../../public/assets/aboutus/vision-growing-abroad.webp"
import * as S from "./styles"

function VisionAndMission() {
  return (
    <S.Container backgroundImg={VisionAndMissionBackground.src}>
      <S.TextContainer color="primary">
        <h3>Mission</h3>
        <p>
          Our Mission is to show people how to grow and rise up to their full potential to make their dreams come true.
        </p>
      </S.TextContainer>

      <S.TextContainer background="primary">
        <h3>Vision</h3>
        <p>
          Our Vision is to create a platform that brings people together as a community with similar goals, where people can share their stories and inspire others.
        </p>
      </S.TextContainer>
    </S.Container>
  )
}

export default VisionAndMission
