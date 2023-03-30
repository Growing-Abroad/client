import React, { useState, useEffect } from 'react';

const VerticalBar: React.FC = () => {
  const [barColor, setBarColor] = useState<string>('red');
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const newScrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;

      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let requestId: number;

    const animateFill = () => {
      const blue = Math.round(255 - (255 * (scrollPercentage / 100))); // Define o valor de azul com base na porcentagem de rolagem
      const fillPercentage = Math.min(scrollPercentage / 100, 1); // Define a porcentagem de preenchimento, limitando-a a no máximo 100%

      const newColor = `rgb(0, 0, ${blue})`; // Define a nova cor com base no valor de azul

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
    <div style={{ backgroundColor: 'blue', width: '5px', height: '100vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: `${scrollPercentage}%`, backgroundColor: barColor }} />
    </div>
  );
};

export default VerticalBar;
