import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

interface Props<T> {
  data: T[];
  renderItem: React.FC<T>;
}

function AliceCarouselComp<T>({ data, renderItem }: Props<T>) {
  const items = data.map(renderItem);
  return (
    <AliceCarousel
      infinite
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={0}
      renderDotsItem={() => null}
      renderNextButton={() => null}
      renderPrevButton={() => null}
      items={items}
      animationDuration={1000}
      autoWidth
      autoHeight
      animationType="slide"
      animationEasingFunction="linear"
    />
  );
}

export default AliceCarouselComp;
