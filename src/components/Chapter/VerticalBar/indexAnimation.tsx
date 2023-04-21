import React, { useState, useEffect } from 'react';
// import * as S from './style';
// import useAppContext from '@/hooks/useAppContext';

// const VerticalBar: React.FC = () => {
//   const { isMobile } = useAppContext();
//   const propsBar = [
//     {
//       index: 1,
//       height: '730px',
//     },
//     { index: 2, height: '910px' },
//     { index: 3, height: '830px' },
//     { index: 4, height: '870px' },
//     { index: 5, height: '860px' },
//     { index: 6, height: '' },
//   ];
//   const [barColor, setBarColor] = useState<string>('#0073CF');
//   const [scrollPercentage, setScrollPercentage] = useState<number>(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.pageYOffset;
//       const windowHeight = window.innerHeight;
//       const fullHeight = document.body.clientHeight;
//       const newScrollPercentage =
//         (scrollPosition / (fullHeight - windowHeight)) * 100;

//       setScrollPercentage(newScrollPercentage);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     let requestId: number;

//     const animateFill = () => {
//       const fillPercentage = Math.min(scrollPercentage / 100, 1);
//       const newColor = `#0073CF`;
//       setBarColor(newColor);

//       if (requestId) {
//         cancelAnimationFrame(requestId);
//       }

//       requestId = requestAnimationFrame(animateFill);

//       if (fillPercentage === 1) {
//         setBarColor('red');
//         cancelAnimationFrame(requestId);
//       }
//     };

//     animateFill();

//     return () => {
//       if (requestId) {
//         cancelAnimationFrame(requestId);
//       }
//     };
//   }, [scrollPercentage]);

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: '0',
//         left: `${isMobile ? '16px' : '50%'}`,
//         display: 'flex',
//         marginLeft: `${isMobile ? '0' : '-40px'}`,
//         flexDirection: 'column',
//         alignItems: 'center',
//         paddingTop: '75px',
//       }}
//     >
//       {propsBar.map((prop) => {
//         return (
//           <>
//             {' '}
//             <S.IndexCircle>
//               {prop.index}
//               <S.IndexCircleProgress
//                  backgroundColor={barColor}
//               >{prop.index}</S.IndexCircleProgress>
//             </S.IndexCircle>
//             <S.VerticalBar height={prop.height}>
//               <S.VerticaProgressBar />
//             </S.VerticalBar>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default VerticalBar;
