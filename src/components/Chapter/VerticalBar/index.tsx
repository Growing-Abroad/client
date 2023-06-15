import React, { useState, useEffect } from 'react';
import * as S from './style';
import useAppContext from '@/hooks/useAppContext';

const VerticalBar: React.FC = () => {
  const { isMobile } = useAppContext();
  const [phoneType, setPhoneType] = useState<string>('462px')

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

    const isIOS = /iPad|iPhone|iPod/.test(userAgent);

    const isAndroid = /Android/.test(userAgent);

    if (isIOS && isMobile && isSafari) {
      setPhoneType('750px')
    }

    if (isAndroid) {
      setPhoneType('462px')
    }
  }, []);

  const propsBar = [
    { index: 1, height: '750px' },
    { index: 2, height: '910px' },
    { index: 3, height: '830px' },
    { index: 4, height: '870px' },
    { index: 5, height: phoneType },
    { index: 6, height: '' },
  ];

  const [barColor, setBarColor] = useState<string>('#0073CF');
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const newScrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;

    setScrollPercentage(newScrollPercentage);

    const newActiveIndex = propsBar.findIndex(prop => {
      const element = document.getElementById(`progress-bar-${prop.index}`);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom >= 0;
    });
    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let requestId: number;

    const animateFill = () => {
      const fillPercentage = Math.min(scrollPercentage / 100, 1);
      const newColor = fillPercentage === 1 ? '#4A9AFD' : '#4A9AFD';
      setBarColor(newColor);

      if (requestId) {
        cancelAnimationFrame(requestId);
      }

      requestId = requestAnimationFrame(animateFill);

      if (fillPercentage === 1) {
        setBarColor('#4A9AFD');
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
    <S.ProgressBar>
      {propsBar.map((prop) => (
        <React.Fragment key={prop.index}>
          <S.IndexCircle backgroundColor={activeIndex === prop.index ? '#4A9AFD' : barColor}>
            {prop.index}
            <S.IndexCircleProgress
              backgroundColor={activeIndex === prop.index ? '#4A9AFD' : barColor}
            />
          </S.IndexCircle>

            <S.VerticalBar
              backgroundColor={activeIndex === prop.index ? '#4A9AFD' : barColor}
              height={prop.height}
            >
            <S.VerticaProgressBar id={`progress-bar-${prop.index}`} />

          </S.VerticalBar>
        </React.Fragment>
      ))}
    </S.ProgressBar>
  );
};

export default VerticalBar;
