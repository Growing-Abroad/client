import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import * as S from './styles';
import { aboutUs } from '@utils/mock-ups/about-us.mock';
import StdButton from '@/components/generics/StdButton/StdButton';
import useAppContext from '@/hooks/useAppContext';

function About() {
  const { isMobile } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <S.TextContainer>
        {aboutUs.map((section, i) => (
          <S.Text key={section.title} id={'box' + i}>
            <h3>{section.title}</h3>
            <h4>{section.subtitle}</h4>
            <StdButton
              style={{
                width: `${isMobile ? '118px' : '202px'}`,
                height: `${isMobile ? '40px' : '59px'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: `${isMobile ? '8px 15px' : '20px 40px'}`,
                letterSpacing: '1.3px',
                whiteSpace: 'nowrap',
              }}
            >
              Read More
            </StdButton>
            {isOpen &&
              section.paragraphs.map((p, i) => (
                <p className="more-text" key={i}>
                  {p}
                </p>
              ))}
          </S.Text>
        ))}
      </S.TextContainer>
    </S.Container>
  );
}

export default About;
