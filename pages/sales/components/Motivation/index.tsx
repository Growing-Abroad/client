import StdButton from "@/components/generics/StdButton/StdButton";
import threePersons from "@/../public/assets/online-course-fun.webp";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";

export function Motivation() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse style={{gap:`${isMobile ? '' : "0px"}`, paddingBottom:`${isMobile ?'100px' :''}`}}>
      <TwoColorTitle
        styles={{ width: `${isMobile ? "340px" : "1400px"}` , paddingBottom: `${isMobile ? '' : "40px"}`, lineHeight: `${isMobile ?'53px' : '72px'}` }}
        text1="... Then join our Online Course for "
        text2="Successful Motivated Foreigners to ..."
        hasSpaceBtw
        fontSize={isMobile ?"36px" :"60px"}
      />
      <S.ContentWhyBuyCourse>
        {isMobile ? (<> </>) : (<Image
          src={threePersons}
          width={isMobile ? 460 : 748}
          height={isMobile ? 390 : 558}
          alt=""
        />)}
        <S.RightContentWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Learn all the steps you have to take to land your{" "}
              <S.BoldSpanWhyBuyCourse>DREAM JOB</S.BoldSpanWhyBuyCourse> in{" "}
              <S.BoldSpanWhyBuyCourse>GERMANY</S.BoldSpanWhyBuyCourse> or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Discover <S.BoldSpanWhyBuyCourse>SECRET METHODS </S.BoldSpanWhyBuyCourse>and Job Search
              strategies to get multiple job interviews
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Create a<S.BoldSpanWhyBuyCourse> UNIQUE APPLICATION </S.BoldSpanWhyBuyCourse>in German and
              European standards which stands out of all the other candidates in
              the market
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Create a professional Business Profile to{" "}
              <S.BoldSpanWhyBuyCourse>ATTRACT RECRUITERS </S.BoldSpanWhyBuyCourse>and{" "}
              <S.BoldSpanWhyBuyCourse>CEOs</S.BoldSpanWhyBuyCourse>
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <S.BoldSpanWhyBuyCourse>CONVINCE</S.BoldSpanWhyBuyCourse> in every single
              <S.BoldSpanWhyBuyCourse> JOB INTERVIEW </S.BoldSpanWhyBuyCourse>
              with your unique personality
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Land your <S.BoldSpanWhyBuyCourse>DREAM JOB</S.BoldSpanWhyBuyCourse> in Germany or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
        </S.RightContentWhyBuyCourse>
      </S.ContentWhyBuyCourse>
      <StdButton style={{marginTop:`${isMobile ? '' : "25px"}`}}>Buy Online Course Now</StdButton>
    </S.WrapperWhyBuyCourse>
  );
}

export default Motivation;
