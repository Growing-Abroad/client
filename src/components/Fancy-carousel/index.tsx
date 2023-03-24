import { useState } from 'react';
import {
  FlexboxSlide,
  FlexboxSlider,
  FromWrapper,
  ImageBackground,
  ImageBackgroundContent,
  TextBlock,
  TextBlockH3,
} from './style';
import Image, { StaticImageData } from 'next/image';
import { variables } from '@styles/global-variables';
import { removePxFromCssValue } from '@utils/scripts/general-utility';
import useAppContext from '@/hooks/useAppContext';
import StdButton from '../generics/StdButton/StdButton';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export type TCarouselData = Array<ICarouselData>;
export interface ICarouselData {
  imgSrc: StaticImageData;
  title: string;
  from: string;
  countryFlag: string;
  href: string;
}
export interface Props {
  dataArray: TCarouselData;
  haveSmallsSlides?: boolean;
}

export default function FancyCarousel(props: Props) {
  const {
    windowSize: { width },
    isMobile,
  } = useAppContext();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);
  const [selectedSlide, setSelectedSlide] = useState<number>(initialSlide());

  function initialSlide(): number {
    if (width > mediaQueryNumber && props.dataArray.length > 2) {
      return 2;
    } else {
      return 0;
    }
  }

  function handleSlideClasses(index: number): string {
    let classes = 'flexbox-slide';
    if (index % 2 !== 0) classes += ' short';
    if (selectedSlide === index) classes += ' selected-slide';
    if (width && width < mediaQueryNumber)
      classes += handleMobileSliderClass(index);

    return classes;
  }

  function handleMobileSliderClass(index: number) {
    if (
      selectedSlide !== index &&
      index !== selectedSlide - 1 &&
      index !== selectedSlide + 1
    ) {
      return ' dontShow';
    }
    return '';
  }

  return (
    <FlexboxSlider className="flexbox-slider my-flexbox-slider">
      {props.dataArray.map((item, i) =>
        !props.haveSmallsSlides ? (
          <FlexboxSlide
            className={handleSlideClasses(i)}
            key={i + '-' + item.title}
            onClick={() => setSelectedSlide(i)}
          >
            <TextBlock className="text-block">
              <TextBlockH3>{item.title}</TextBlockH3>

              <FromWrapper>
                <p>{item.from}</p>
                <Image
                  src={`countries-flags/${item.countryFlag}.svg`}
                  alt={`flag of ${item.countryFlag}`}
                  width={isMobile ? 25 : 64}
                  height={isMobile ? 17.58 : 45}
                  className="country-flag"
                />
              </FromWrapper>

              <StdButton
                icon={faPlay}
                className="watch-video-btn"
                style={{ marginTop: 'auto', width: 'max-content' }}
              >
                Watch Video
              </StdButton>
            </TextBlock>
            <Image src={item.imgSrc} alt="Slide Image" className="slide-img" />
          </FlexboxSlide>
        ) : (
          <FlexboxSlide
            className={handleSlideClasses(i)}
            key={i + '-' + item.title}
            onClick={() => setSelectedSlide(i)}
          >
            <ImageBackground src={item.imgSrc.src} className="img">
              <ImageBackgroundContent isActive={selectedSlide === i}>
                <TextBlockH3>{item.title}</TextBlockH3>

                <p>{item.from}</p>

                <StdButton
                  icon={faPlay}
                  className="watch-video-btn"
                  style={{ marginTop: 'auto', width: 'max-content' }}
                >
                  Find Experts Now
                </StdButton>
              </ImageBackgroundContent>
            </ImageBackground>
          </FlexboxSlide>
        ),
      )}
    </FlexboxSlider>
  );
}
