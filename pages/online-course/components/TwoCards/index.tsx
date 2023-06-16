import * as S from "../../../../styles/online-course/components/TwoCards/style";
import thumbsUp from "@/../public/assets/thumbs-up.jpg";
import thumbsDown from "@/../public/assets/thumbs-down.jpg";
import useAppContext from "@/hooks/useAppContext";
import {
  IconCheckGreen,
  IconCloseRed,
  IconNegativeRedGest,
  IconPositiveGreenGest,
} from "@/components/Icons";

export function TwoCards() {
  const { isMobile } = useAppContext();
  return (
    <S.Container>
      <S.TwoColorTitleCustom
        text1="Who is this"
        isMobile={isMobile}
        text2="Online Course for?"
        fontSize={isMobile ? "" : "52px"}
        hasSpaceBtw
      />
      <S.ContentTwoCards>
        <S.TwoCardsWrapper>
        <S.ImageCustom
            isMobile={isMobile}
            src={thumbsUp}
            alt=""
            width={isMobile ? 350 : 430}
            height={isMobile ? 194 : 170}
          />
          <h3>
            <IconPositiveGreenGest />
            It's for ...
          </h3>
          <div>
            <S.CardText>
              <IconCheckGreen />
              People with a very good knowledge of English
            </S.CardText>
            <S.CardText>
              <IconCheckGreen />
              People with a university degree (except Law and Medicine)
            </S.CardText>
            <S.CardText>
              <IconCheckGreen />
              People who are motivated and want to achieve something in life
            </S.CardText>
            <S.CardText>
              <IconCheckGreen />
              People from all around the world
            </S.CardText>
            <S.CardText>
              <IconCheckGreen />
              People who already live in Germany
            </S.CardText>
          </div>
        </S.TwoCardsWrapper>
        <S.TwoCardsWrapper className="right-card">
          <S.ImageCustom
            isMobile={isMobile}
            src={thumbsDown}
            alt=""
            width={isMobile ? 350 : 430}
            height={isMobile ? 194 : 170}
          />
          <h3>
            {" "}
            <IconNegativeRedGest />
            It's NOT for ...
          </h3>
          <div>
            <S.CardText>
              <IconCloseRed />
              People with only basic level of English
            </S.CardText>
            <S.CardText>
              <IconCloseRed />
              People with no education
            </S.CardText>
            <S.CardText>
              <IconCloseRed />
              People who are not open for change and new adventures
            </S.CardText>
            <S.CardText>
              <IconCloseRed />
              People who want to stay in their comfort zone
            </S.CardText>
            <S.CardText>
              <IconCloseRed />
              People who don’t want to have a successful career
            </S.CardText>
          </div>
        </S.TwoCardsWrapper>
      </S.ContentTwoCards>
      <S.StdButtonCustom>
        Buy Now
      </S.StdButtonCustom>
    </S.Container>
  );
}
export default TwoCards;
