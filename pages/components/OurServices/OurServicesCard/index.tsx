import * as S from './styles'
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import {IService} from "@utils/services";

export default function OurServicesCard({id, title, subtitle, descriptions, image, hasMoreInfo}: IService) {
  // const navigate = useNavigate()

  const handleRedirect = (id: string) => {
    // navigate('services/' + id)
    console.log('botão book now')
    return id
  }

  return (
      <S.Container>
        <Image src={image.src} alt={image.alt}  />
        <S.CardContainer>
          <S.CardHeader>
            <h2> {title} </h2>
            <h3> {subtitle} </h3>
          </S.CardHeader>

          <S.CardDescriptions>
            {descriptions.map(description => (
                <div key={description.id}>
                  <AiFillStar className="star"/>
                  <span>{description.content}</span>
                </div>
            ))}
          </S.CardDescriptions>

          <div>
            <S.Button onClick={() => handleRedirect(id)}>{hasMoreInfo ? 'More Info' : 'Book Now'}</S.Button>
          </div>
        </S.CardContainer>
      </S.Container>
  )
}