import { aboutUs } from '@utils/mock-ups/about-us.mock'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import * as S from './styles'

function About() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Container>
      <S.TextContainer>
        {aboutUs.map(section => (
          <S.Text key={section.title}>
            <h3>{section.title}</h3>
            <h4>{section.subtitle}</h4>
            {!!isOpen && section.paragraphs.map((p, i) => <p key={i}>{p}</p> )}
          </S.Text>
        ))}
      </S.TextContainer>
      <S.More>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </S.More>
    </S.Container>
  )
}

export default About;
