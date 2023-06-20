import { ISocial } from "@/utils/socials";
import {
  Social,
  SocialText,
  MyCounter,
  IconImage,
} from "@/../styles/candidates/components/Community/SocialCard/index.styles";

interface ImageSizeProps {
  mobile: number;
  desktop: number;
}

interface Props extends ISocial {
  counterOn: boolean;
}

export default function SocialCard(props: Props) {
  return (
    <Social>
      <a href={props.socialLink} target="_blank" rel="noreferrer">
        <IconImage src={props.source} alt={props.name} />
      </a>
      <SocialText>
        <p>
          + {props.counterOn ? <MyCounter end={props.followNumber} /> : "0"}
        </p>
        <span>{props.followType}</span>
      </SocialText>
    </Social>
  );
}
