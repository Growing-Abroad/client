import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 22px 64px;
  margin: 0;
`;

export const LogoContainer = styled.div``;

export const Logo = styled(Image).attrs({
  width: 150,
  height: 45,
  alt: '',
})``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding-left: 80px;
  flex: 1;
  justify-content: space-around;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 5;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: transparent;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 12px;
  /* or 60% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.3px;
  text-transform: uppercase;

  color ${({ theme }) => theme.colors.primaryBlue};
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
`;

export const IconButton = styled.button`
  background-color: transparent;
`;

export const Icon = styled(Image).attrs({
  width: 31,
  height: 32,
  alt: '',
  href: '',
})``;
