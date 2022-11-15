import NewsLetter from '@components/news-letter';
import {
  FooterContent,
  FooterContentWrapper,
  FooterLinksLi,
  FooterLinksUl,
  FooterLinksWrapper,
  SocialMediaWrapper,
  StyledFooter,
  SocialMedia,
  Media,
  FooterBottomWrapper,
  FooterBottomRight,
  FooterBottomContainer,
  Links,
} from './style';
import TwoColorTitle from '@components/two-color-title';
import LinkedInIcon from '@assets/icons/linkedin.webp';
import FacebookIcon from '@assets/icons/facebook.webp';
import InstagramIcon from '@assets/icons/instagram.webp';
import TikTokIcon from '@assets/icons/tiktok.webp';
import YoutubeIcon from '@assets/icons/youtube.webp';
import { removePxFromCssValue } from '@/utils/scripts/general-utility';
import { variables } from '@/styles/global-variables';
import { useWindowSize } from '@/hooks/useWindowSize';

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
              style={{ justifyContent: width < removePxFromCssValue(variables.sizes.mediaQuery) ? 'center' : 'flex-start' }}
            ></TwoColorTitle>
            <SocialMedia>
              <Media src={InstagramIcon} />
              <Media src={TikTokIcon} />
              <Media src={YoutubeIcon} />
              <Media src={FacebookIcon} />
              <Media src={LinkedInIcon} />
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
