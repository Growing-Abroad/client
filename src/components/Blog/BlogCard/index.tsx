// import { useNavigate } from 'react-router-dom'
import { IPost } from '../../../utils/blog_posts'
import * as S from './styles'

export default function BlogCard ({ id, title, category, image }: IPost){
  // const navigate = useNavigate()
  
  const handleRedirectToBlogPost = (id: string) => {
    // navigate('blog/post/' + id)
    console.log(id)
  }
  
  return (
    <S.Container onClick={() => handleRedirectToBlogPost(id)}>
      <S.PostImage src={image.src} alt={image.alt} />
      <section>
        <S.PostText weight={300} >
          { category.name }
        </S.PostText>
        <S.PostText weight={600} >
          { title }
        </S.PostText>
      </section>
    </S.Container>
  )
}