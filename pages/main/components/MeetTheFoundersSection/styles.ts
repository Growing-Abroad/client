import styled from 'styled-components';

export const Container = styled.div`
  padding: 90px 140px;
`;

export const TitlesContainer = styled.div`
  width: 100%;
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
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.h4`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.primaryBlue};
`;

export const ContentDescription = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 20px;
  line-height: 24.26px;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  margin-top: 20px;

  span {
    color: ${({ theme }) => theme.colors.secondaryBlue};
  }
`;

export const CallToAction = styled.div`
  margin-top: 60px;
`;
