import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

interface Props<T> {
  data: T[];
  renderItem: React.FC<T>;
  visibleItems: number;
  itemWidth: number;
}

function Carousel<T>({ data, renderItem, visibleItems }: Props<T>) {
  const timeToRestart = 5;
  const [clonedData, setClonedData] = useState<T[]>([]);

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setClonedData(() => [...data, ...data.slice(0, visibleItems)]);
  }, []);

  return (
    <Container visibleItems={visibleItems}>
      <Content timeToRestart={timeToRestart} isWorking startIndex={startIndex}>
        {clonedData.map(renderItem)}
      </Content>
    </Container>
  );
}

export default Carousel;