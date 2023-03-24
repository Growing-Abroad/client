import styled, { css } from 'styled-components';

export const SupraContainer = styled.div`
  width: 100vw;
  padding: 163px 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1514px;
`;

export const TitlesContainer = styled.div`
  width: 100%;
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  padding: 0 163px;
`;

export const Content = styled.div`
  max-height: 460px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const ParagraphsContainer = styled.div`
  padding-top: 32px;
  max-width: 473px;
`;

export const Paragraph = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;

  color: ${({ theme }) => theme.colors.primaryBlue};
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-height: 100%;
  margin-left: 19px;
  /* background-color: red; */
`;
