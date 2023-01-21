import * as S from './styles'
import studentHat from '@/../public/assets/Photos-Main-Page/Education-Item.webp'
import worldPicture from '@/../public/assets/Photos-Main-Page/Earth_Canva.png'
import expertPicture from '@/../public/assets/Photos-Main-Page/Experts_Canva.png'
import WorkInCard from './WorkInCard'
import { useRouter } from "next/router";
import {FormattedMessage, useIntl} from "react-intl";
import Link from "next/link";

function WorkIn() {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });


  return (
    <S.Container>
      <h2 className="title">
        Work in <span>EUROPE</span> or <span>GERMANY</span>
      </h2>

      <S.CardSpace>
        <WorkInCard
          title='Student or professional'
          photo={studentHat}
          description="No matter if you have a higher education degree or you are still studying , we will make it possible for you to get your dream job."
        />
        <WorkInCard
          title='Start your new life in Europe'
          photo={worldPicture}
          description="For people who are already in Germany or Europe and also for people who are not and want to relocate."
        />
        <WorkInCard
          title='High qualified experts'
          photo={expertPicture}
          description="As German experts with over 10 years experience on the European market, we guide you through the whole application process."
        />
      </S.CardSpace>
    </ S.Container>
  )

}

export default WorkIn