import StdButton from "@/components/generics/StdButton/StdButton";
import threePersons from "@/../public/assets/online-course-fun.webp";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";

export function Motivation() {
  const { isMobile } = useAppContext();
  return (
    <S.Wrapper style={{gap:`${isMobile ? '' : "0px"}`}}>
      <TwoColorTitle
        styles={{ width: `${isMobile ? "340px" : "1400px"}` , paddingBottom: `${isMobile ? '' : "40px"}`, lineHeight: `${isMobile ?'53px' : '72px'}` }}
        text1="... Then join our Online Course for "
        text2="Successful Motivated Foreigners to ..."
        hasSpaceBtw
        fontSize={isMobile ? "":"60px" }
      />
      <S.Content>
        {isMobile ? (<> </>) : (<Image
          src={threePersons}
          width={isMobile ? 460 : 748}
          height={isMobile ? 390 : 558}
          alt=""
        />)}
        <S.RightContent>
          <S.TextWrapper>
            <S.Icon>
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
            </S.Icon>
            <S.Text>
              Learn all the steps you have to take to land your{" "}
              <S.BoldSpan>DREAM JOB</S.BoldSpan> in{" "}
              <S.BoldSpan>GERMANY</S.BoldSpan> or Europe
            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Icon>
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
            </S.Icon>
            <S.Text>
              Discover <S.BoldSpan>SECRET METHODS </S.BoldSpan>and Job Search
              strategies to get multiple job interviews
            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Icon>
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
            </S.Icon>
            <S.Text>
              Create a<S.BoldSpan> UNIQUE APPLICATION </S.BoldSpan>in German and
              European standards which stands out of all the other candidates in
              the market
            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Icon>
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
            </S.Icon>
            <S.Text>
              Create a professional Business Profile to{" "}
              <S.BoldSpan>ATTRACT RECRUITERS </S.BoldSpan>and{" "}
              <S.BoldSpan>CEOs</S.BoldSpan>
            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Icon>
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
            </S.Icon>
            <S.Text>
              <S.BoldSpan>CONVINCE</S.BoldSpan> in every single
              <S.BoldSpan> JOB INTERVIEW </S.BoldSpan>
              with your unique personality
            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Icon>
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
            </S.Icon>
            <S.Text>
              Land your <S.BoldSpan>DREAM JOB</S.BoldSpan> in Germany or Europe
            </S.Text>
          </S.TextWrapper>
        </S.RightContent>
      </S.Content>
      <StdButton style={{marginTop:`${isMobile ? '' : "25px"}`}}>Buy Online Course Now</StdButton>
    </S.Wrapper>
  );
}

export default Motivation;
