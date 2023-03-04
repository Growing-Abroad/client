import { ContainerBlogCardSection } from './style';
import { Wrapper } from '@/components/Wrapper';
import Card from '@/components/Card';
import Pagination from '../Pagination';
export default function BlogCardSection() {
  const cards = [
    {
      src: '/../public/assets/career-blog/image.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image2.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image3.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image4.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image5.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image6.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image7.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
    {
      src: '/../public/assets/career-blog/image8.png',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
    },
  ];
  return (
    <Wrapper>
    <ContainerBlogCardSection>
      {cards.map((card, index) => (
        <Card
          key={index}
          src={card.src}
          description={card.description}
          title={card.title}
          text={card.text}
        />
      ))}
      <Pagination indexes={4} />
    </ContainerBlogCardSection>
    </Wrapper>
  );
}
