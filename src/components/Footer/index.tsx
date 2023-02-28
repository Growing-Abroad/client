import {
  FooterContent,
  FooterContentWrapper,
  FooterLinks,
  FooterLinksContentWrapper,
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
} from './style';
import LinkedInIcon from '@/../public/assets/icons/linkedin.webp';
import FacebookIcon from '@/../public/assets/icons/facebook.webp';
import InstagramIcon from '@/../public/assets/icons/instagram.webp';
import TikTokIcon from '@/../public/assets/icons/tiktok.webp';
import YoutubeIcon from '@/../public/assets/icons/youtube.webp';
import Image from 'next/image';
import { variables } from '@styles/global-variables';
import { removePxFromCssValue } from '@utils/scripts/general-utility';
import NewsLetter from '../news-letter';
import TwoColorTitle from '../two-color-title';
import useAppContext from '@/hooks/useAppContext';
import StdButton from '../generics/StdButton/StdButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const {
    windowSize: { width },
  } = useAppContext();

  return (
    <StyledFooter>
      <FooterContentWrapper>
        <NewsLetter />
        <FooterLinksContentWrapper>
          <FooterLinks>
            <h3>Contact us</h3>
            <p>
              Also check out the section{' '}
              <span>"Frequently asked questions"</span> and{' '}
              <span>"Career Blogs"</span>. Maybe your question is already
              answered there.
            </p>
            <StdButton style={{display:'flex', width:'236px',padding:'20px 40px', fontSize:'16px'}} icon={faEnvelope}>Contact Us</StdButton>

          </FooterLinks>
          <FooterLinks>
            {' '}
            <h3>Quick links</h3>
            <li>About Us</li>
            <li>Services</li>
            <li>Jobs</li>
            <li>Career Blog</li>
          </FooterLinks>
          <FooterLinks>
            <h3>Useful links</h3>
            <li>Legal notice</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>FAQ</li>
          </FooterLinks>
          <FooterLinks>
            <h3>Social media</h3>
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
          </FooterLinks>
        </FooterLinksContentWrapper>
      </FooterContentWrapper>

      <FooterBottomContainer>
        <FooterBottomWrapper>
          <span> Copyright &copy;&nbsp;2022 Growing Abroad </span>
          <FooterBottomRight>
            <Links href="#">Legal Notice</Links>
            <Links href="#">Data Privacy</Links>
          </FooterBottomRight>
        </FooterBottomWrapper>
      </FooterBottomContainer>
    </StyledFooter>
  );
}
