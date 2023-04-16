import * as S from "../../../../../styles/candidates/components/OurServices/OurServicesCard/index.styles";
import { BsCheckLg } from "react-icons/bs";
import Image from "next/image";
import { IService } from "@utils/services";
import { useTheme } from "styled-components";
import useAppContext from "@/hooks/useAppContext";

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
  const { isMobile } = useAppContext();

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
              <p dangerouslySetInnerHTML={{ __html: description.content }} />
            </div>
          ))}
        </S.CardDescriptions>

        <div className="lastDiv">
          <S.Button onClick={() => handleRedirect(id)}>
            {hasMoreInfo ? "More Info" : "Book Now"}
          </S.Button>
        </div>
      </S.CardContainer>
    </S.Container>
  );
}
