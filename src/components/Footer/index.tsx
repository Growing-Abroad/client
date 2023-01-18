import {
  FooterContent,
  FooterContentWrapper,
  FooterLinksLi,
  FooterLinksUl,
  FooterLinksWrapper,
  SocialMediaWrapper,
  StyledFooter,
  SocialMedia,
  FooterBottomWrapper,
  FooterBottomRight,
  FooterBottomContainer,
  Links,
} from "./style";
import LinkedInIcon from "@/../public/assets/icons/linkedin.webp";
import FacebookIcon from "@/../public/assets/icons/facebook.webp";
import InstagramIcon from "@/../public/assets/icons/instagram.webp";
import TikTokIcon from "@/../public/assets/icons/tiktok.webp";
import YoutubeIcon from "@/../public/assets/icons/youtube.webp";
import Image from "next/image";
import { useWindowSize } from "@hooks/useWindowSize";
import { variables } from "@styles/global-variables";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import NewsLetter from "../news-letter";
import TwoColorTitle from "../two-color-title";

export default function Footer() {
  const [width] = useWindowSize();

  return (
    <StyledFooter>
      <FooterContentWrapper>
        <NewsLetter />

        <FooterContent>
          <FooterLinksWrapper>
            <FooterLinksUl>
              <FooterLinksLi>Online Course</FooterLinksLi>
              <FooterLinksLi>Coaching</FooterLinksLi>
              <FooterLinksLi>Jobs</FooterLinksLi>
              <FooterLinksLi>Career Blog</FooterLinksLi>
            </FooterLinksUl>
            <FooterLinksUl>
              <FooterLinksLi>About Us</FooterLinksLi>
              <FooterLinksLi>FAQ</FooterLinksLi>
              <FooterLinksLi>Contact Us</FooterLinksLi>
            </FooterLinksUl>
          </FooterLinksWrapper>

          <SocialMediaWrapper>
            <TwoColorTitle
              text1="Social"
              text2="Media"
              hasSpaceBtw
              style={{
                justifyContent:
                  width < removePxFromCssValue(variables.sizes.mediaQuery)
                    ? "center"
                    : "flex-start",
              }}
            ></TwoColorTitle>
            <SocialMedia>
              <Image
                src={InstagramIcon}
                alt="instagram icon"
                height={32}
                width={32}
              />
              <Image
                src={TikTokIcon}
                alt="tiktok icon"
                height={32}
                width={32}
              />
              <Image
                src={YoutubeIcon}
                alt="youtube icon"
                height={32}
                width={32}
              />
              <Image
                src={FacebookIcon}
                alt="facebook icon"
                height={32}
                width={32}
              />
              <Image
                src={LinkedInIcon}
                alt="linkedin icon"
                height={32}
                width={32}
              />
            </SocialMedia>
          </SocialMediaWrapper>
        </FooterContent>
      </FooterContentWrapper>

      <FooterBottomContainer>
        <FooterBottomWrapper>
          <span>&#9426;&nbsp;2022 Growing Abroad GmbH</span>
          <FooterBottomRight>
            <Links href="#">Legal Notice</Links>
            <Links href="#">Data Privacy</Links>
          </FooterBottomRight>
        </FooterBottomWrapper>
      </FooterBottomContainer>
    </StyledFooter>
  );
}
