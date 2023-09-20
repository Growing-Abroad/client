import TwoColorTitle from "@/components/two-color-title";
import * as S from "./styles";
import It from "../../public/assets/images/ITServices.jpg";
import data_science from "../../public/assets/images/Dataanalytics.jpg";
import business from "../../public/assets/images/business.jpg";
import { useRouter } from "next/router";

const Item = [
  {
    photo: It,
    title: "IT",
    description: (
      <>
        Web and Design
        <br />
        Software Development
        <br />
        IT Security
        <br />
        Engineering
        <br />
        Cloud
        <br />
        Project Manager
      </>
    ),
  },
  {
    photo: data_science,
    title: "Data and Analytics",
    description: (
      <>
        Data Analyst
        <br />
        BI and Big Data
        <br />
        Data Engineer
        <br />
        Data Science
        <br />
        Machine Learning Engineer
      </>
    ),
  },
  {
    photo: business,
    title: "Business and Economy ",
    description: (
      <>
        Marketing and Sales <br />
        Finance <br />
        Business Analyst <br />
        Business Development <br />
        Supply Chain
      </>
    ),
  },
];

const AreaBanner = () => {
  const router = useRouter();

  return (
    <S.Section>
      <TwoColorTitle
        text1="We help you to find the best talents in the"
        text2="emerging job market"
        hasSpaceBtw
        as="h2"
        wrapperStyles={{ maxWidth: "100%" }}
      />
      <S.Paragraph>
        No matter if it is on IT, Data and Analytics or Business and Economy
        areas. We will bring you the best talents.
      </S.Paragraph>

      <S.ContainerItens>
        {Item.map((item, idx) => (
          <S.Item key={idx}>
            <S.ImageUI src={item.photo} alt={item.title} />
            <S.Overlay>
              <S.TitleItem>{item.title}</S.TitleItem>
              <S.SubTitle>{item.description}</S.SubTitle>
            </S.Overlay>
          </S.Item>
        ))}
      </S.ContainerItens>
      <S.Button href="/contact-us">Contact us now</S.Button>
    </S.Section>
  );
};

export default AreaBanner;
