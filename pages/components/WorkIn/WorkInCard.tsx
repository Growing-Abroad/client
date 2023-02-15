import * as S from './styles'
import Image, { StaticImageData } from 'next/image'
import { CSSProperties } from 'styled-components'
import StdParagraqh from '@/components/StdParagraqh/StdParagraqh'

function WorkInCard(p: CardProps) {
  return (
    <S.Card>
      <Image src={p.photo} alt="Photo" width={250} style={p.imgStyles}  />
      <h3>{p.title}</h3>
      <StdParagraqh className='workin-description'>{p.description}</StdParagraqh>
    </S.Card>
  )
}

export type CardProps = {
  title: string,
  photo: StaticImageData,
  description: string,
  imgStyles?: CSSProperties
}

export default WorkInCard