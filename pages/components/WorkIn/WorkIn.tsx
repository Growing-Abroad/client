import * as S from './styles'

import studentHat from '@/../public/assets/main-page/student-hat.svg'
import worldPicture from '@/../public/assets/main-page/world-icon.svg'
import expertPicture from '@/../public/assets/main-page/person-icon.svg'

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
        English Speaking Jobs in  <span>Germany</span>
      </h2>

      <S.CardSpace>
        <WorkInCard
          title='Student or professional'
          photo={studentHat}
          imgStyles={{maxWidth: '175px', maxHeight: '101px'}}
          description="No matter if you have a higher education degree or you are still studying , we will make it possible for you to get your dream job."
        />
        <WorkInCard
          title='Start your new life in Europe'
          photo={worldPicture}
          imgStyles={{maxWidth: '124px', maxHeight: '123px'}}
          description="For people who are already in Germany or Europe and also for people who are not and want to relocate."
        />
        <WorkInCard
          title='High qualified experts'
          photo={expertPicture}
          imgStyles={{maxWidth: '118px', maxHeight: '133px'}}
          description="As German experts with over 10 years experience on the European market, we guide you through the whole application process."
        />
      </S.CardSpace>
    </ S.Container>
  )

}

export default WorkIn