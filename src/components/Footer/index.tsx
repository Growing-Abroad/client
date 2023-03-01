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
import wave from "@/public/assets/main-page/wave-desktop.png"

export default function Footer() {
  const {
    windowSize: { width },
    isMobile,
  } = useAppContext();

  return (
    <>
      {isMobile ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -40 1440 320"
          style={{ marginBottom: '-10px' }}
        >
          <path
            fill="#0073CF"
            fill-opacity="10"
            d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,245.3C672,245,768,171,864,117.3C960,64,1056,32,1152,37.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      ) : (
        <svg width="1512" height="93" viewBox="0 0 1512 93" fill="#0073CF" fill-opacity="10" xmlns="http://www.w3.org/2000/svg">
        <path d="M1195.24 6.4808C1105.57 11.4588 1018.63 23.3872 904.025 53.4431C859.27 65.3715 787.752 82.5597 752.069 87.162C716.386 91.7643 672.538 94.4881 637.913 92.14C622.49 91.1068 603.742 90.825 562.162 85.1896C521.035 79.2723 474.163 69.5981 442.109 61.9902C379.663 47.0562 298.62 41.4207 239.501 40.7633C108.864 39.2605 0 69.692 0 69.692V0H1512V32.5918C1512 32.5918 1434.13 14.3705 1351.43 8.45321C1269.32 2.81774 1230.92 4.50838 1195.24 6.4808Z" fill="white"/>
        </svg>

      )}

      <StyledFooter>
        <FooterContentWrapper>
          <NewsLetter />
          <FooterLinksContentWrapper>
            <FooterLinks width="400px" alignItems="start">
              <h3>Contact us</h3>
              <p>
                Also check out the section{' '}
                <span>"Frequently asked questions"</span> and{' '}
                <span>"Career Blogs"</span>. Maybe your question is already
                answered there.
              </p>
              <StdButton
                style={{
                  display: 'flex',
                  width: '210px',
                  padding: '20px 40px',
                  fontSize: '16px',
                }}
                icon={faEnvelope}
              >
                Contact Us
              </StdButton>
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
                  height={26}
                  width={26}
                />
                <Image
                  src={TikTokIcon}
                  alt="tiktok icon"
                  height={26}
                  width={26}
                />
                <Image
                  src={YoutubeIcon}
                  alt="youtube icon"
                  height={26}
                  width={26}
                />
                <Image
                  src={FacebookIcon}
                  alt="facebook icon"
                  height={26}
                  width={26}
                />
                <Image
                  src={LinkedInIcon}
                  alt="linkedin icon"
                  height={26}
                  width={26}
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
    </>
  );
}
