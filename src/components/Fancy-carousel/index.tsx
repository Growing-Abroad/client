import { variables } from '@/styles/global-variables';
import { useState, useEffect, useLayoutEffect } from 'react';
import {
  FlexboxSlide,
  FlexboxSlider,
  WatchVideoBtn,
  SlideImg,
  TextBlock,
  TextBlockH3,
} from './style';
// import './style.css';

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
  const [array, setArray] = useState(props.dataArray);
  const [windowWidth, windowHeight] = useWindowSize();
  const {
    sizes: { mediaQuery },
  } = variables;
  const pxIndex = mediaQuery.indexOf('px');
  const mediaQueryNumber = Number(mediaQuery.slice(0, pxIndex));
  const [selectedSlide, setSelectedSlide] = useState<number>(initialSlide());



  function initialSlide(): number {
    if (windowWidth > mediaQueryNumber) {
      return props.dataArray.length >= 2 ? 2 : 1;
    } else {
      return 0;
    }
  }

  function isSelectedSlide(index: number): string {
    return selectedSlide === index ? 'selected-slide ' : ' ';
  }

  function handleMobileSliderClass(index: number) {
    if (windowWidth < mediaQueryNumber) {
      if (
        selectedSlide !== index && index !== selectedSlide - 1 && index !== selectedSlide + 1
      ) {
        return ' dontShow';
      }
    }
    return '';
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    setSelectedSlide(initialSlide());
    const arraycopy = [...array];
    setArray(arraycopy);
  }, [windowWidth]);

  return (
    <FlexboxSlider className="flexbox-slider my-flexbox-slider">
      {array.map((item, i) => (
        <FlexboxSlide
          className={
            'flexbox-slide ' +
            (i % 2 !== 0 ? 'short ' : ' ') +
            isSelectedSlide(i) +
            handleMobileSliderClass(i)
          }
          key={i + '-' + item.title}
          onClick={() => setSelectedSlide(i)}
        >
          <SlideImg src={item.imgSrc} alt="Slide Image" />
          <TextBlock className="text-block">
            <TextBlockH3>{item.title}</TextBlockH3>
            <p>{item.paragraph}</p>
            <WatchVideoBtn>Watch Video</WatchVideoBtn>
          </TextBlock>
        </FlexboxSlide>
      ))}
    </FlexboxSlider>
  );
}
