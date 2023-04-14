import * as S from "../../../../../styles/candidates/components/OurServices/OurServicesCard/index.styles";
import { BsCheckLg } from "react-icons/bs";
import Image from "next/image";
import { IService } from "@utils/services";
import { useTheme } from "styled-components";

export default function OurServicesCard({
  id,
  title,
  subtitle,
  descriptions,
  image,
  hasMoreInfo,
}: IService) {
  // const navigate = useNavigate()
  const {
    colors: { blue700, yellow400 },
  } = useTheme();

  const handleRedirect = (id: string) => {
    // navigate('services/' + id)
    return id;
  };
  return (
    <S.Container>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <S.CardContainer>
        <S.CardHeader>
          <h2> {title} </h2>
          <h3> {subtitle} </h3>
        </S.CardHeader>

        <S.CardDescriptions>
          {descriptions.map((description) => (
            <div key={description.id}>
              <BsCheckLg className="star" />
              <span dangerouslySetInnerHTML={{ __html: description.content }} />
            </div>
          ))}
        </S.CardDescriptions>

        <div className="lastDiv">
          <S.Button
            style={{
              width: 196,
              borderRadius: 50,
              backgroundColor: yellow400,
              color: blue700,
            }}
            onClick={() => handleRedirect(id)}
          >
            {hasMoreInfo ? "More Info" : "Book Now"}
          </S.Button>
        </div>
      </S.CardContainer>
    </S.Container>
  );
}
