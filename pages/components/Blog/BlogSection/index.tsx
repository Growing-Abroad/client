import  {Container, BlogCard, SubHeadingBlog} from './styles';
import TwoColorTitle from '@components/two-color-title';
import BlogSwiper from '@pages/components/Blog/BlogSwiper';
import Card from '@components/Card';
import StdButton from '@/components/generics/StdButton/StdButton';

export default function BlogSection() {
  const cards = [
    {
      src: '/../public/assets/puzzle.webp',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
      textMobile:
        'Our Vision is to create a platform that brings people together as a community',
    },
    {
      src: '/../public/assets/online-course-success.webp',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
      textMobile:
        'Our Vision is to create a platform that brings people together as a community',
    },
    {
      src: '/../public/assets/faqs.webp',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
      textMobile:
        'Our Vision is to create a platform that brings people together as a community',
    },
    {
      src: '/../public/assets/job-interview-coach.webp',
      description: 'image',
      title: 'Practical Marketing Tips for Black Friday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna',
      textMobile:
        'Our Vision is to create a platform that brings people together as a community',
    },
  ];
  return (
    <Container>
      <TwoColorTitle text1="Latest" text2="Blog" hasSpaceBtw as="h2" />
      <SubHeadingBlog>Choose one of our interesting topics to get more information</SubHeadingBlog>
      <BlogCard>
        {cards.map((card, index) => (
          <Card
            key={index}
            src={card.src}
            description={card.description}
            title={card.title}
            text={card.text}
            textMobile={card.textMobile}
          />
        ))}
      </BlogCard>

      <StdButton>Read More</StdButton>
    </Container>
  );
}
