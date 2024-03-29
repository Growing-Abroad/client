import * as S from "@/styles/pages-styles/candidates/Blog/BlogCard/index.styles";
import { IPost } from "@utils/blog_posts";

export default function BlogCard({ id, title, category, image }: IPost) {

  const handleRedirectToBlogPost = (id: string) => {
    return id;
  };

  return (
    <S.Container onClick={() => handleRedirectToBlogPost(id)}>
      <S.PostImage src={image?.src} alt={image?.alt} />
      <section>
        <S.PostText weight={300}>{category?.name}</S.PostText>
        <S.PostText weight={600} size="1.25">
          {title}
        </S.PostText>
      </section>
    </S.Container>
  );
}
