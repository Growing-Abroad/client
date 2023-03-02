import useAppContext from "@/hooks/useAppContext";
import { ISocial } from "@/utils/socials";
import Image from "next/image";
import { Social, SocialText} from "./styles";


export default function SocialCard(social: ISocial) {
    const {isMobile} = useAppContext();

    return (
        <Social key={social.socialLink}>
            <a 
            href={social.socialLink} 
            target="_blank" 
            rel="noreferrer"
            >
                <Image 
                src={social.source} alt={social.name} 
                width={isMobile? 60 : 120} height={isMobile? 60 : 120} 
                />
            </a>
                <SocialText>
                <p>
                    +{social.followNumber
                    .toLocaleString("en")
                    .replace(/,/g, ",")}
                </p>
                <span>{social.followType}</span>
            </SocialText>
        </Social>
    )
}