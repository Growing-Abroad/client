import {
  FooterContentWrapper,
  FooterLinks,
  FooterLinksContentWrapper,
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
import YoutubeIcon from '@/../public/assets/icons/youtube-icon.svg';
import Image from 'next/image';
import NewsLetter from '../news-letter';
import useAppContext from '@/hooks/useAppContext';
import StdButton from '../generics/StdButton/StdButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import wave from "../../../public/assets/wave-desktop.svg"

export default function Footer() {
  const {
    isMobile,
  } = useAppContext();

  return (
    <>
      {
        isMobile && <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -40 1440 320"
            style={{ marginBottom: '-10px' }}
          >
            <path
              fill="#0073CF"
              fillOpacity="10"
              d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,245.3C672,245,768,171,864,117.3C960,64,1056,32,1152,37.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
      }
      <StyledFooter style={{paddingTop: isMobile? 0 : 130}}>
        {!isMobile && (
          <div  style={{ backgroundImage: `url(${wave.src})`}} className='wave' >
          </div>
        )}
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
                  alignItems: `${isMobile ? 'center' : ''}`,
                  justifyContent: `${isMobile ? 'center' : ''}`,
                  width: `${isMobile ? '143px' : '210px'}`,
                  padding: `${isMobile ? '8px 15px' : '20px 40px'}`,
                  fontSize: `${isMobile ? '12px' : '16px'}`,
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
