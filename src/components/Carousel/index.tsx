import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';

interface Props<T> {
  data: T[];
  renderItem: React.FC<T>;
  visibleItems: number;
}

function Carousel<T>({ data, renderItem, visibleItems }: Props<T>) {
  const [slideIsWorking, setSlideIsWorking] = useState<boolean>(true);
  const timeToRestart = 15;
  const clonedData = [
    ...data.slice(-visibleItems),
    ...data,
    ...data.slice(0, visibleItems),
  ];

  const [startIndex, setStartIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
  //   }, timeToRestart * 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Container visibleItems={visibleItems}>
      <Content
        timeToRestart={timeToRestart}
        isWorking={slideIsWorking}
        startIndex={startIndex}
      >
        {clonedData
          .slice(startIndex, startIndex + visibleItems)
          .map(renderItem)}
      </Content>
    </Container>
  );
}

export default Carousel;
