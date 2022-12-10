import { useWindowSize } from '@/hooks/useWindowSize';
import { variables } from '@/styles/global-variables';
import { removePxFromCssValue } from '@/utils/scripts/general-utility';
import { useState } from 'react';
import {
  FlexboxSlide,
  FlexboxSlider,
  WatchVideoBtn,
  TextBlock,
  TextBlockH3,
} from './style';
import Image from 'next/image'

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
  const [windowWidth] = useWindowSize();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);
  const [selectedSlide, setSelectedSlide] = useState<number>(initialSlide());

  function initialSlide(): number {
    if (windowWidth > mediaQueryNumber && props.dataArray.length > 2) {
      return 2;
    } else {
      return 0;
    }
  }

  function handleSlideClasses(index: number): string {
    let classes = 'flexbox-slide';
    console.log(windowWidth)
    if (index % 2 !== 0) classes += ' short';
    if (selectedSlide === index) classes += " selected-slide";
    if (windowWidth && windowWidth < mediaQueryNumber) classes += handleMobileSliderClass(index);

    return classes
  }

  function handleMobileSliderClass(index: number) {
    if (
      selectedSlide !== index && index !== selectedSlide - 1 && index !== selectedSlide + 1
    ) {
      return ' dontShow';
    }
    return '';
  }

  return (
    <FlexboxSlider className="flexbox-slider my-flexbox-slider">
      {props.dataArray.map((item, i) => (
        <FlexboxSlide
          className={handleSlideClasses(i)}
          key={i + '-' + item.title}
          onClick={() => setSelectedSlide(i)}
        >
          <Image src={item.imgSrc} alt="Slide Image" />
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
