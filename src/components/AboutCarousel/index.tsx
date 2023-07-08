import Image, { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";

interface AboutCarouselProps {
  slideContent1: ReactNode;
  slideContent2: ReactNode;

  imageContent1: StaticImageData;
  imageContent2: StaticImageData;
}

export const AboutCarousel = ({
  slideContent1,
  slideContent2,
  imageContent1,
  imageContent2
}: AboutCarouselProps) => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <section style={{ display: "flex" }}>
      <div>{activeContentIndex === 0 ? slideContent1 : slideContent2}</div>
      <div style={{ display: "flex" }}>
        <Image
          src={imageContent1}
          alt=""
        />
        <Image
          src={imageContent2}
        alt=""
        />
      </div>
    </section>
  );
};
