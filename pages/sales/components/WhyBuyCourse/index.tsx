import ImgThinking from "@/../public/assets/images/thinking-job-in-germany.webp";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";
import { IconEmotion } from "@/components/Icons";

export function WhyBuyCourse() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse style={{ paddingBottom: "20px" }}>
      <TwoColorTitle
        text1="Does this sound"
        text2="Familiar...?"
        styles={{
          width: `${isMobile ? "350px" : ""}`,
          display: "flex",
          flexDirection: `${isMobile ? "column" : "row"}`,
        }}
        fontSize={isMobile ? "36px" : "60px"}
        hasSpaceBtw
      />
      <S.ContentWhyBuyCourse>
        <Image
          src={ImgThinking}
          alt="Thinking about job in Germany"
          className="img-thinkinh-job-germany"
        />

        <S.RightContentWhyBuyCourse
          style={{ gap: `${isMobile ? "52px" : "72px"}` }}
        >
          <S.TextWrapperWhyBuyCourse>
            <IconEmotion />
            <S.TextWhyBuyCourse style={{ fontWeight: "500" }}>
              You feel like that there is more you can achieve in your life?
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <IconEmotion />
            <S.TextWhyBuyCourse style={{ fontWeight: "500" }}>
              You have no idea how and where to start to build a career in
              Europe or Germany?
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <IconEmotion />
            <S.TextWrapperWhyBuyCourse style={{ fontWeight: "500" }}>
              <S.TextWhyBuyCourse style={{ fontWeight: "500" }}>
              You are very qualified but still don't earn enough money?
              </S.TextWhyBuyCourse>
            </S.TextWrapperWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
        </S.RightContentWhyBuyCourse>
      </S.ContentWhyBuyCourse>
    </S.WrapperWhyBuyCourse>
  );
}

export default WhyBuyCourse;
