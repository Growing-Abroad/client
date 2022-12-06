import * as S from './styles'
import Image from 'next/image'

function WorkInCard(props: CardProps) {
  return (
    <S.Card>
      <h3>{props.title}</h3>
      <Image src={props.photo} alt="Photo" width={250} />
      <article>{props.description}</article>
    </S.Card>
  )
}

export type CardProps = {
  title: string,
  photo: string,
  description: string,
}

export default WorkInCard