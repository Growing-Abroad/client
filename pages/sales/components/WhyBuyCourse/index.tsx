import StdButton from "@/components/generics/StdButton/StdButton";
import unhappy from "@/../public/assets/pages/sales/Unhappy-business.webp";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";

export function WhyBuyCourse() {
  const { isMobile } = useAppContext();
  return (
    <S.Wrapper style={{paddingBottom:`${isMobile ? '20px':'120px'}`}}>
      <TwoColorTitle text1="Does this sound" text2="Familiar...?"  styles={{width:`${isMobile ? '350px':''}`, display:'flex',flexDirection:`${isMobile ? 'column':'row'}`}} hasSpaceBtw/>
      <S.Content>

          <Image
            src={unhappy}
            width={isMobile ? 400 : 838}
            height={isMobile ? 317 : 558}
            alt=""
          />

        <S.RightContent style={{gap:`${isMobile ? '30px':'73px'}`}}>
          <S.TextWrapper>

          <span>
              <svg
                width="63"
                height="62"
                viewBox="0 0 63 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4191 0C14.2941 0 0.419117 13.875 0.419117 31C0.419117 48.125 14.2941 62 31.4191 62C48.5441 62 62.4191 48.125 62.4191 31C62.4191 13.875 48.5441 0 31.4191 0ZM41.4191 21C43.5441 21 45.4191 22.875 45.4191 25C45.4191 27.25 43.5441 29 41.4191 29C39.1691 29 37.4191 27.25 37.4191 25C37.4191 22.875 39.1691 21 41.4191 21ZM21.4191 21C23.5441 21 25.4191 22.875 25.4191 25C25.4191 27.25 23.5441 29 21.4191 29C19.1691 29 17.4191 27.25 17.4191 25C17.4191 22.875 19.1691 21 21.4191 21ZM42.6691 48.375C39.7941 45 35.6691 43 31.4191 43C27.0441 43 22.9191 45 20.0441 48.375C18.4191 50.375 15.2941 47.75 17.0441 45.75C20.5441 41.5 25.7941 39 31.4191 39C36.9191 39 42.1691 41.5 45.6691 45.75C47.4191 47.75 44.2941 50.375 42.6691 48.375Z"
                  fill="#05335B"
                />
              </svg>

            </span>

            <S.Text style={{fontWeight:'500'}}>
            You feel like that there is more you can achieve in your life?

            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>

          <span>
              <svg
                width="63"
                height="62"
                viewBox="0 0 63 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4191 0C14.2941 0 0.419117 13.875 0.419117 31C0.419117 48.125 14.2941 62 31.4191 62C48.5441 62 62.4191 48.125 62.4191 31C62.4191 13.875 48.5441 0 31.4191 0ZM41.4191 21C43.5441 21 45.4191 22.875 45.4191 25C45.4191 27.25 43.5441 29 41.4191 29C39.1691 29 37.4191 27.25 37.4191 25C37.4191 22.875 39.1691 21 41.4191 21ZM21.4191 21C23.5441 21 25.4191 22.875 25.4191 25C25.4191 27.25 23.5441 29 21.4191 29C19.1691 29 17.4191 27.25 17.4191 25C17.4191 22.875 19.1691 21 21.4191 21ZM42.6691 48.375C39.7941 45 35.6691 43 31.4191 43C27.0441 43 22.9191 45 20.0441 48.375C18.4191 50.375 15.2941 47.75 17.0441 45.75C20.5441 41.5 25.7941 39 31.4191 39C36.9191 39 42.1691 41.5 45.6691 45.75C47.4191 47.75 44.2941 50.375 42.6691 48.375Z"
                  fill="#05335B"
                />
              </svg>

            </span>

            <S.Text style={{fontWeight:'500'}}>
            You have no idea how and where to start to build a career in Europe or Germany?
            </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
          <span>
              <svg
                width="63"
                height="62"
                viewBox="0 0 63 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4191 0C14.2941 0 0.419117 13.875 0.419117 31C0.419117 48.125 14.2941 62 31.4191 62C48.5441 62 62.4191 48.125 62.4191 31C62.4191 13.875 48.5441 0 31.4191 0ZM41.4191 21C43.5441 21 45.4191 22.875 45.4191 25C45.4191 27.25 43.5441 29 41.4191 29C39.1691 29 37.4191 27.25 37.4191 25C37.4191 22.875 39.1691 21 41.4191 21ZM21.4191 21C23.5441 21 25.4191 22.875 25.4191 25C25.4191 27.25 23.5441 29 21.4191 29C19.1691 29 17.4191 27.25 17.4191 25C17.4191 22.875 19.1691 21 21.4191 21ZM42.6691 48.375C39.7941 45 35.6691 43 31.4191 43C27.0441 43 22.9191 45 20.0441 48.375C18.4191 50.375 15.2941 47.75 17.0441 45.75C20.5441 41.5 25.7941 39 31.4191 39C36.9191 39 42.1691 41.5 45.6691 45.75C47.4191 47.75 44.2941 50.375 42.6691 48.375Z"
                  fill="#05335B"
                />
              </svg>

            </span>
            <S.Text style={{fontWeight:'500'}}>
            You are very qualified but still don't earn enough money?
            </S.Text>
          </S.TextWrapper>
        </S.RightContent>
      </S.Content>
    </S.Wrapper>
  );
}

export default WhyBuyCourse;
