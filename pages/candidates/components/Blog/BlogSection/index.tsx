import * as S from "@/styles/pages-styles/candidates/Blog/BlogSection/index.styles";
import TwoColorTitle from "@components/two-color-title";
import Card from "@components/Card";
import useAppContext from "@/hooks/useAppContext";
import puzzleImg from "@assets/puzzle.jpg"
import blogImg2 from "@assets/online-course-success.jpg"
import blogImg3 from "@assets/faqs.jpg"
import blogImg4 from "@assets/job-interview-coach.jpg"

export default function BlogSection() {
  const { isMobile } = useAppContext();

  const cards = [
    {
      src: puzzleImg.src,
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: blogImg2.src,
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: blogImg3.src,
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: blogImg4.src,
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
  ];
  return (
    <S.Container>
      <TwoColorTitle
        text1="Latest"
        text2="Blogs"
        hasSpaceBtw
        as="h2"
        styles={{ margin: "0", height: `${isMobile ? "43px" : "73px"}` }}
      />
      <S.SubHeadingBlog>
        Choose one of our interesting topics to get more information
      </S.SubHeadingBlog>
      <S.BlogCard>
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
      </S.BlogCard>

      <S.MoreNews>
        Explore more
      </S.MoreNews>
    </S.Container>
  );
}
