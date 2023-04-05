import React from 'react';

import { CardWithImage } from '@/components';
import TwoColorTitle from '@/components/two-color-title';

import DigitalTouch from '@/../public/assets/digital_touch.webp';
import Meeting from '@/../public/assets/meeting.webp';

import { Container, Content, Subtitle, TitlesContainer } from './styles';

function OurServicesSection() {
  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle text1="Our" text2="Services" hasSpaceBtw />
        <Subtitle>
          With our +10 years proven experience in IT and Engineering projects
          and agile environment, we offer recruiting services{' '}
        </Subtitle>
      </TitlesContainer>
      <Content>
        <CardWithImage
          title={`Headhunting professionals from all over the world`}
          description="Are you not finding the best candidate for your open vacancies? Don't you worry, we will find the best match and connect it with you."
          imageSrc={DigitalTouch.src}
          onClick={() => null}
          buttonTitle="Contact Us"
        />
        <CardWithImage
          title="Interculture and career development workshops"
          description="Are you having problems with international candidates? Lorem ipsum, or lipsum as it is sometimes known, is dummy text"
          imageSrc={Meeting.src}
          onClick={() => null}
          buttonTitle="Contact Us"
        />
      </Content>
    </Container>
  );
}

export default OurServicesSection;
