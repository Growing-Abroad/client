import ImgThinking from "@/../public/assets/images/thinking-job-in-germany.jpg";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import { IconEmotion } from "@/components/Icons";

interface IWhyBuyCourseProps {
  justifyContent?: string
}

export function WhyBuyCourse({justifyContent="justify"}:IWhyBuyCourseProps) {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse className="sales">
      <S.TwoColorTitleCustom
        text1="Does this sound"
        text2="Familiar...?"
        fontSize={isMobile ? "36px" : "52px"}
        hasSpaceBtw
      />
      <S.ContentWhyBuyCourse className="sales">
        <S.ImageCustom
          src={ImgThinking}
          alt="Thinking about job in Germany"
          className="img-thinkinh-job-germany desktop"
        />

        <S.RightContentWhyBuyCourse style={{justifyContent: justifyContent}} className="sales">
          <S.TextWrapperWhyBuyCourse>
            <IconEmotion />
            <S.TextWhyBuyCourse>
              You feel like that there is more you can achieve in your life?
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <IconEmotion />
            <S.TextWhyBuyCourse>
              You have no idea how and where to start to build a career in
              Europe or Germany?
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <IconEmotion />
            <S.TextWrapperWhyBuyCourse>
              <S.TextWhyBuyCourse>
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
