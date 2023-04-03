import React from 'react';

import { Container } from './styles';

interface Props<T> {
  data: T[];
  renderItem: React.FC;
}

export function Carousel({ data, renderItem: RenderItem }: Props<T>) {
  return (
    <Container>
      {data && data.map((item) => <RenderItem {...item} />)}
    </Container>
  );
}
