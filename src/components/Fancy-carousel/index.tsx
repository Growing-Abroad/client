import { useState } from 'react';
import './style.css';

export type TCarouselData = Array<ICarouselData>;
export interface ICarouselData {
  imgSrc: string;
  title: string;
  paragraph: string;
  href: string;
}
export interface Props {
  dataArray: TCarouselData;
}

export default function FancyCarousel(props: Props) {
  const [selectedSlide, setSelectedSlide] = useState(initialSlide());

  function initialSlide(): number {
    return props.dataArray.length >= 2 ? 2 : 1;
  }

  function isSelectedSlide(index: number): string {
    return selectedSlide === index ? 'selected-slide' : '';
  }

  return (
    <div className="flexbox-slider my-flexbox-slider">
      {props.dataArray.map((item, i) => (
        <div
          className={
            'flexbox-slide ' +
            (i % 2 !== 0 ? 'short ' : ' ') +
            isSelectedSlide(i)
          }
          key={i + '-' + item.title}
          onClick={() => setSelectedSlide(i)}
        >
          <img src={item.imgSrc} alt="Slide Image" />
          <div className="text-block">
            <h3>{item.title}</h3>
            <div className="text">
              <p>{item.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
