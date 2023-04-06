import Image from 'next/image';
import React from 'react';
import StdButton from '../generics/StdButton/StdButton';

import { Container, CardContent, ButtonContainer } from './styles';
import useAppContext from '@/hooks/useAppContext';

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  onClick(): any;
  buttonTitle: string;
}

function CardWithImage({
  title,
  description,
  imageSrc,
  buttonTitle,
  onClick,
}: Props) {
  const { isMobile } = useAppContext();

  return (
    <Container>
      <Image
        src={imageSrc}
        alt={imageSrc}
        width={540}
        height={339}
        style={{ borderRadius: 10, width: '100%' }}
      />
      <CardContent>
        {/* <S.WhiteTriangle /> */}
        <h3 style={{ margin: '0' }}>{title}</h3>
        <p>{description}</p>
      </CardContent>
      <ButtonContainer>
        <StdButton
          onClick={onClick}
          style={{
            width: `${isMobile ? '196px' : '259px'}`,
            height: `${isMobile ? '35px' : '59px'}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}
        >
          {buttonTitle}
        </StdButton>
      </ButtonContainer>
    </Container>
  );
}

export default CardWithImage;
