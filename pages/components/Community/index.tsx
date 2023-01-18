import * as S from "./styles";
import { socials } from "@/src/utils/socials";
import Image from "next/image";
import TwoColorTitle from "@/src/components/two-color-title";

function CommunitySection() {
  return (
    <S.Container>
      <TwoColorTitle
        text1="Join Our"
        text2="COMMUNITY"
        hasSpaceBtw
      />
      <S.Socials>
        {socials.map(social => (
          <S.Social key={social.socialLink}>
            <a href={social.socialLink} target="_blank" rel="noreferrer">
              <Image src={social.source} alt={social.name} width={85} />
            </a>
            <S.SocialText>
              <p>+ {social.followNumber.toLocaleString("en").replace(/,/g, ".")}</p>
              <span>{social.followType + "s"}</span>
            </S.SocialText>
          </S.Social>
        ))}
      </S.Socials>
    </S.Container>
  );
}

export default CommunitySection;