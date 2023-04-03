import react, { useEffect, useRef, useState } from 'react';

import { Container, Content } from './styles';

interface Props<T> {
  data: T[];
  renderItem: React.FC<T>;
}

function Carousel<T>({ data, renderItem }: Props<T>) {
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [slideCount, setSlideCount] = useState<number>(data.length);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data || data.length === 0) {
      setSlideCount(0);
      return;
    }
    const firstSlideClone = data[0];
    const lastSlideClone = data[data.length - 1];
    setSlideCount(data.length + 2);
    data.unshift(lastSlideClone);
    data.push(firstSlideClone);
  }, [data]);

  useEffect(() => {
    const slideWidth = contentRef.current?.firstElementChild?.clientWidth ?? 0;
    setSlideWidth(slideWidth);
  }, [slideCount]);

  const handleTransitionEnd = () => {
    const firstSlide = data[1];
    const lastSlide = data[data.length - 2];
    if (firstSlide === lastSlide) {
      setSlideCount(data.length - 2);
      data.shift();
      data.pop();
      contentRef.current?.classList.remove('infinite');
      contentRef.current?.classList.add('reset');
      setTimeout(() => {
        contentRef.current?.classList.remove('reset');
      }, 0);
    }
  };

  return (
    <Container>
      <Content
        ref={contentRef}
        slideWidth={slideWidth}
        slideCount={slideCount}
        onTransitionEnd={handleTransitionEnd}
        className={slideCount > data.length ? 'infinite' : ''}
      >
        {data &&
          data.map((item, index) => (
            <div key={index} style={{ minWidth: slideWidth }}>
              {renderItem(item)}
            </div>
          ))}
      </Content>
    </Container>
  );
}

export default Carousel;
