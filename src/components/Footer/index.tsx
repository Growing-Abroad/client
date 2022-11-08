import NewsLetter from '../news-letter';
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
import TwoColorTitle from '../two-color-title';
import LinkedInIcon from '../../assets/icons/LinkedIn-icon.png';
import FacebookIcon from '../../assets/icons/Facebook-icon.png';
import InstagramIcon from '../../assets/icons/Instagram-icon.png';
import TikTokIcon from '../../assets/icons/TikTok-icon.png';
import YoutubeIcon from '../../assets/icons/Youtube-icon.png';

export default function Footer() {
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
