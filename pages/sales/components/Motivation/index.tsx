import StdButton from "@/components/generics/StdButton/StdButton";
import threePersons from "@/../public/assets/images/card-online-course-goals.webp";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";
import { IconCheck } from "@/components/Icons";


export function Motivation() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse
      style={{
        gap: `${isMobile ? "" : "0px"}`,
        paddingBottom: `${isMobile ? "20px" : ""}`,
      }}
    >
      <TwoColorTitle
        styles={{
          width: `${isMobile ? "340px" : "1400px"}`,
          paddingBottom: `${isMobile ? "" : "40px"}`,
          lineHeight: `${isMobile ? "53px" : "72px"}`,
        }}
        text1="... Then join our Online Course for "
        text2="Successful Motivated Foreigners to ..."
        hasSpaceBtw
        fontSize={isMobile ? "36px" : "60px"}
        className="title-why-buy-course"
      />
      <S.ContentWhyBuyCourse>
        {isMobile ? (
          <> </>
        ) : (
          <Image
            src={threePersons}
            width={isMobile ? 460 : 748}
            height={isMobile ? 390 : 558}
            alt=""
          />
        )}
        <S.RightContentWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck />
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Learn all the steps you have to take to land your{" "}
              <S.BoldSpanWhyBuyCourse>DREAM JOB</S.BoldSpanWhyBuyCourse> in{" "}
              <S.BoldSpanWhyBuyCourse>GERMANY</S.BoldSpanWhyBuyCourse> or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck />
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Discover{" "}
              <S.BoldSpanWhyBuyCourse>SECRET METHODS </S.BoldSpanWhyBuyCourse>
              and Job Search strategies to get multiple job interviews
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck />
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Create a
              <S.BoldSpanWhyBuyCourse>
                {" "}
                UNIQUE APPLICATION{" "}
              </S.BoldSpanWhyBuyCourse>
              in German and European standards which stands out of all the other
              candidates in the market
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck />
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Create a professional Business Profile to{" "}
              <S.BoldSpanWhyBuyCourse>
                ATTRACT RECRUITERS{" "}
              </S.BoldSpanWhyBuyCourse>
              and <S.BoldSpanWhyBuyCourse>CEOs</S.BoldSpanWhyBuyCourse>
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck />
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <S.BoldSpanWhyBuyCourse>CONVINCE</S.BoldSpanWhyBuyCourse> in every
              single
              <S.BoldSpanWhyBuyCourse> JOB INTERVIEW </S.BoldSpanWhyBuyCourse>
              with your unique personality
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck />
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Land your{" "}
              <S.BoldSpanWhyBuyCourse>DREAM JOB</S.BoldSpanWhyBuyCourse> in
              Germany or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
        </S.RightContentWhyBuyCourse>
      </S.ContentWhyBuyCourse>
      <StdButton style={{ margin: "15px 0 30px" }}>
        Buy Online Course Now
      </StdButton>
    </S.WrapperWhyBuyCourse>
  );
}

export default Motivation;
