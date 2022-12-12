import React from 'react'
import * as S from './styles'
import TwoColorTitle from '@components/two-color-title'
import Image from 'next/image'
import { sharedValues } from '../../../../utils/mock/shared_values'

function ShareValues() {
  return (
    <S.Container>
      <TwoColorTitle text1='Do we share the same' text2='values?' hasSpaceBtw />
      <S.CardContainer>
        {sharedValues.map((sharedValue, index)=> (
          <S.Card key={index}>
            <Image 
              src={sharedValue.image}
              alt={sharedValue.title}
              width={300}
            />
            <S.CardContent>
              <S.WhiteTriangle />
              <h3>{sharedValue.title}</h3>
              <p>{sharedValue.body}</p>
            </S.CardContent>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Container>
  )
}

export default ShareValues
