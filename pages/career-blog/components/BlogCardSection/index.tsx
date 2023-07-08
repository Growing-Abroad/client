import {
  Container,
  ContentBlogCardSection,
} from "../../../../styles/career-blog/components/BlogCardSection/index.styles";
import { Wrapper } from "@/components/Wrapper";
import Card from "@/components/Card";
import Pagination from "../Pagination";
export default function BlogCardSection() {
  const cards = [
    {
      src: "/../public/assets/curriculum.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/handshake.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/online-course-success.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/meeting.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/puzzle.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/trust.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/job-interview-coach.jpg",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
    {
      src: "/../public/assets/faqs.webp",
      description: "image",
      title: "Practical Marketing Tips for Black Friday",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
      textMobile:
        "Our Vision is to create a platform that brings people together as a community",
    },
  ];
  return (
    <Container>
      <ContentBlogCardSection>
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
      </ContentBlogCardSection>
      <Pagination indexes={5} />
    </Container>
  );
}
