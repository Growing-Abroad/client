import React from 'react';

import TwoColorTitle from '@/components/two-color-title';
import Germany from '@/../public/assets/Photos-Main-Page/Blog-Germany_Canva.png';

import OtherCard from '@/components/Card';

import {
  Card,
  CardContent,
  Container,
  Subtitle,
  TitlesContainer,
} from './styles';
import Image from 'next/image';
import StdButton from '@/components/generics/StdButton/StdButton';
import { CardWithImage } from '@/components';

function RecruitingAndCareerServicesSection() {
  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Recruiting and"
          text2="Career Services "
          hasSpaceBtw
        />
        <Subtitle>
          Are you a candidate and want to land your dream job in Germany? Are
          you not finding the right candidates and struggling to attract talents
          to your company?
        </Subtitle>
      </TitlesContainer>
      <CardWithImage
        title="For Companies"
        description="We will find the best international talents for you and help you to attract qualified professionals from around the world"
        imageSrc={Germany.src}
        buttonTitle="Find Experts Now"
        onClick={() => null}
      />
    </Container>
  );
}

export default RecruitingAndCareerServicesSection;
