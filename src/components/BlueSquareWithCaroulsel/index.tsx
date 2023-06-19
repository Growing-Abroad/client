import {
  CarouselContainer,
  DiscoverContent,
  IContentProps,
} from "@components/BlueSquareWithCaroulsel/style";
import FancyCarousel, { ICarouselData, index } from "../Fancy-carousel";
import { PropsWithChildren } from 'react';

export interface IBlueSquareProps extends PropsWithChildren, IContentProps {
  carouselData: ICarouselData[];
  onSlideChangeCallback?(index: index): void;
  changeOnHover?: boolean;
}

export default function BlueSquareWithCarousel({ carouselData, children, changeOnHover, onSlideChangeCallback, columnReversed }: IBlueSquareProps) {

  return (
    <DiscoverContent className="discover-content" columnReversed={columnReversed} >
      {children}

      <CarouselContainer>
        <FancyCarousel
          initialSlideIndex={1}
          haveSmallsSlides
          dataArray={carouselData}
          IsCentralized
          isIntroducingAPerson
          onSlideClickCallback={onSlideChangeCallback}
          changeOnHover={changeOnHover}
        />
      </CarouselContainer>
    </DiscoverContent>
  );
}
