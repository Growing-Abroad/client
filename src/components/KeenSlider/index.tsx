import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

interface Props {
  data: string[];
}

function KeenSlider({ data }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      animationStarted: () => true,
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {data.length &&
        data.map((item) => (
          <div key={item} className="keen-slider__slide">
            {item}
          </div>
        ))}
    </div>
  );
}

export default KeenSlider;
