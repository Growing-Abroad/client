import * as S from "@/styles/pages-styles/candidates/WorkIn/index.styles";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "styled-components";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import useAppContext from "@/hooks/useAppContext";

function WorkInCard(p: CardProps) {
  const { isMobile } = useAppContext();
  return (
    <S.Card>
      <Image src={p.photo} alt="Photo" height={isMobile ? 80 : 110} style={p.imgStyles} />
      <h3>{p.title}</h3>
      <StdParagraqh className="workin-description">
        {p.description}
      </StdParagraqh>
    </S.Card>
  );
}

export type CardProps = {
  title: string;
  photo: StaticImageData;
  description: string;
  imgStyles?: CSSProperties;
};

export default WorkInCard;
