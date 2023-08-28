import TwoColorTitle from "@/components/two-color-title";
import * as S from "./styles";
import It from "../../public/assets/images/it.jpg";
import data_science from "../../public/assets/images/data-science.jpg";
import business from "../../public/assets/images/business.jpg";
import { useRouter } from "next/router"

const Item = [
  {
    photo: It,
    title: "IT",
    description: "Web and Design Software Development IT Security Engineering Cloud Project Manager"
  },
  {
    photo: data_science,
    title: "Data and Analytics",
    description: "Marketing and Sales Finance Business Analyst Business Development Supply Chain"
  },
  {
    photo: business,
    title: "Business and Economy ",
    description: "Marketing and Sales Finance Business Analyst Business Development Supply Chain"
  },
]

const AreaBanner = () => {
  const router = useRouter()

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
      <S.Button href="/contact-us" >Contact us now</S.Button>

    </S.Section>
  );
};

export default AreaBanner;
