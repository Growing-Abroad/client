import React, { useState, useEffect } from 'react';
import * as S from './style';
import useAppContext from '@/hooks/useAppContext';

const VerticalBar: React.FC = () => {
  const { isMobile } = useAppContext();
  const propsBar = [
    {
      index: 1,
      height: '730px',
    },
    { index: 2, height: '910px' },
    { index: 3, height: '830px' },
    { index: 4, height: '870px' },
    { index: 5, height: '860px' },
    { index: 6, height: '' },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = scrollTop / (documentHeight - windowHeight);
    setScrollPercentage(scrollPercentage);

    propsBar.forEach((prop, index) => {
      const circle = document.getElementById(`indexCircle-${index + 1}`);
      if (circle) {
        const circleOffsetTop = circle.offsetTop;
        if (scrollPercentage >= circleOffsetTop / documentHeight && scrollPercentage < (circleOffsetTop + circle.offsetHeight) / documentHeight) {
          setActiveIndex(index + 1);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {propsBar.map((prop, index) => {
        const isActive = index + 1 === activeIndex;
        const backgroundColor = isActive ? `#${activeIndex}A2C2` : '#0073CF';

        return (
          <React.Fragment key={`bar-${index + 1}`}>
            <S.IndexCircle backgroundColor={backgroundColor} id={`indexCircle-${index + 1}`}>
              {prop.index}
            </S.IndexCircle>
            <S.VerticalBar backgroundColor={backgroundColor} id={`indexCircle-${index + 1}`} height={prop.height}></S.VerticalBar>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default VerticalBar;
