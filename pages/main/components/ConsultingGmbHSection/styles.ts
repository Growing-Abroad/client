import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 163px 140px;
`;

export const TitlesContainer = styled.div`
  width: 100%;
  padding: 0 140px;
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
  padding: 0 140px;
`;

export const Content = styled.div``;
