import React, { useState, useEffect } from 'react';
import * as S from './style';
import useAppContext from '@/hooks/useAppContext';

const VerticalBar: React.FC = () => {
  const { isMobile } = useAppContext();
  const propsBar = [
    {
      index: 1,
      height: '547px',
    },
    { index: 2, height:'594px' },
    { index: 3, height: '758px' },
    { index: 4, height: '904px' },
    { index: 5, height: '788px' },
    { index: 6, height: '897px' },
    { index: 7, height: '' },
  ];
  const [barColor, setBarColor] = useState<string>('#0073CF');
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const newScrollPercentage =
        (scrollPosition / (fullHeight - windowHeight)) * 100;

      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let requestId: number;

    const animateFill = () => {
      const fillPercentage = Math.min(scrollPercentage / 100, 1); // Define a porcentagem de preenchimento, limitando-a a no máximo 100%

      const newColor = `#0073CF`; // Define a nova cor com base no valor de azul

      setBarColor(newColor);

      if (requestId) {
        cancelAnimationFrame(requestId);
      }

      requestId = requestAnimationFrame(animateFill);

      if (fillPercentage === 1) {
        // Define a cor da barra para a cor original quando o preenchimento estiver completo
        setBarColor('red');
        cancelAnimationFrame(requestId);
      }
    };

    animateFill();

    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, [scrollPercentage]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: `${isMobile ? '16px' : '50%'}`,
        display: 'flex',
        marginLeft: `${isMobile ? '0' : '-40px'}`,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '75px',
      }}
    >
      {propsBar.map((prop) => {
        return (
          <>
            {' '}
            <S.IndexCircle>
              {prop.index}
              <S.IndexCircleProgress
                backgroundColor={barColor}
              ></S.IndexCircleProgress>
            </S.IndexCircle>
            <S.VerticalBar height={prop.height}>
              <S.VerticaProgressBar />
            </S.VerticalBar>
          </>
        );
      })}
    </div>
  );
};

export default VerticalBar;
