import * as S from "@/styles/pages-styles/candidates/OurServices/OurServicesCard/index.styles";
import { BsCheckLg } from "react-icons/bs";
import { IService } from "@/utils/services";

const links = [
  "online-course",
  "https://growingabroad.myelopage.com/s/growingabroad/online-course-cv-optimization",
  "https://growingabroad.myelopage.com/s/growingabroad/online-course-cover-letter-optimization",
  "https://growingabroad.myelopage.com/s/growingabroad/job-interview-online-course"
]

export default function OurServicesCard({
  id,
  title,
  subtitle,
  descriptions,
  image,
}: IService) {

  const handleRedirect = (id: string) => {
    if(links.includes(id)) {
      location.href = id;
    }else {
      location.href = `/coaching#${id}`;
    }
  };

  return (
    <S.Container>
      {image && <div
        className="card-image"
        style={{ backgroundImage: `url(${image?.src})` }}
      ></div>}
      <S.CardContainer>
        <S.CardHeader>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <h3> {subtitle} </h3>
        </S.CardHeader>

        <S.CardDescriptions>
          {descriptions?.map((description) => (
            <div key={description.id}>
              <BsCheckLg className="star" />
              <p dangerouslySetInnerHTML={{ __html: description.content }} />
            </div>
          ))}
        </S.CardDescriptions>

        <div className="lastDiv">
          <S.Button onClick={() => handleRedirect(id)}>
            More Info
          </S.Button>
        </div>
      </S.CardContainer>
    </S.Container>
  );
}
