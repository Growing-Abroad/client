import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Slider } from "./styles";

interface Props<T> {
  data: T[];
  renderItem: React.FC<T>;
}

const animation = { duration: 5000, easing: (t: number) => t };

function KeenSlider<T>({ data, renderItem }: Props<T>) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
    },
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });

  return (
    <Slider ref={sliderRef} className="keen-slider">
      {data.length && data.map(renderItem)}
    </Slider>
  );
}

export default KeenSlider;
