import threePersons from "@/../public/assets/images/card-online-course-goals.jpg"
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import { IconCheck } from "@/components/Icons";

export function WhyBuyCourse() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse>
      <S.ContentWhyBuyCourse style={{transform: "unset"}}>
        <Image
          src={threePersons}
          width={isMobile ? 520 : 748}
          height={isMobile ? 390 : 558}
          alt="Why buy course banner"
          priority
        />
        <S.RightContentWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Learn all the steps you have to take to land your{" "}
              <S.BoldSpanWhyBuyCourse>DREAM JOB</S.BoldSpanWhyBuyCourse> in{" "}
              <S.BoldSpanWhyBuyCourse>GERMANY</S.BoldSpanWhyBuyCourse> or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Discover
              <S.BoldSpanWhyBuyCourse>SECRET METHODS </S.BoldSpanWhyBuyCourse>and Job Search
              strategies to get multiple job interviews
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Create a<S.BoldSpanWhyBuyCourse> UNIQUE APPLICATION </S.BoldSpanWhyBuyCourse>in German and
              European standards which stands out of all the other candidates in
              the market
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Create a professional Business Profile to{" "}
              <S.BoldSpanWhyBuyCourse>ATTRACT RECRUITERS </S.BoldSpanWhyBuyCourse>and{" "}
              <S.BoldSpanWhyBuyCourse>CEOs</S.BoldSpanWhyBuyCourse>
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <S.BoldSpanWhyBuyCourse>CONVINCE</S.BoldSpanWhyBuyCourse> in every single
              <S.BoldSpanWhyBuyCourse> JOB INTERVIEW </S.BoldSpanWhyBuyCourse>
              with your unique personality
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Land your <S.BoldSpanWhyBuyCourse>DREAM JOB</S.BoldSpanWhyBuyCourse> in Germany or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
        </S.RightContentWhyBuyCourse>
      </S.ContentWhyBuyCourse>
      <S.StdButtonCustom>Buy Online Course Now</S.StdButtonCustom>
    </S.WrapperWhyBuyCourse>
  );
}

export default WhyBuyCourse;
