import useAppContext from '@/hooks/useAppContext';
import Image from "next/image";
import { ContainerBlogCard, ContentBlogCard, TitleBlogCard, TextBlogCard, ButtonReadMore} from "./style";

interface ICardProps{
  src: string;
  description: string;
  title: string;
  text: string;
  textMobile:string;
}
 function Card({src, description, title, text, textMobile}:ICardProps){
  const {isMobile} = useAppContext();

  return(<ContainerBlogCard>
    <Image width={ isMobile ? 135 : 272} height={ isMobile ? 122 : 245} src={src} alt={description}/>
    <ContentBlogCard>
      <TitleBlogCard>{title}</TitleBlogCard>
      <TextBlogCard>{isMobile ? textMobile : text }</TextBlogCard>
      <ButtonReadMore>READ MORE <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.70312 1.07031C4.46875 1.30469 4.49219 1.65625 4.70312 1.89062L7.53906 4.5625H0.8125C0.484375 4.5625 0.25 4.82031 0.25 5.125V5.875C0.25 6.20312 0.484375 6.4375 0.8125 6.4375H7.53906L4.70312 9.13281C4.49219 9.36719 4.49219 9.71875 4.70312 9.95312L5.21875 10.4688C5.45312 10.6797 5.80469 10.6797 6.01562 10.4688L10.5859 5.89844C10.7969 5.6875 10.7969 5.33594 10.5859 5.10156L6.01562 0.554688C5.80469 0.34375 5.45312 0.34375 5.21875 0.554688L4.70312 1.07031Z" fill="#4A9AFD"/>
</svg>
</ButtonReadMore>
    </ContentBlogCard>

  </ContainerBlogCard>)




}
export default Card;