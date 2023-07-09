import { ISocial } from "@/utils/socials";
import {
  Social,
  SocialText,
  MyCounter,
  IconImage,
} from "@/styles/pages-styles/candidates/Community/SocialCard/index.styles";

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
        {(props.followNumber > 0) && 
          <p>
            + <MyCounter end={props.followNumber} />
          </p>
        }
        
        <span>{props.followType}</span>
      </SocialText>
    </Social>
  );
}
