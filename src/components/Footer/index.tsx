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
  FooterContainer,
  IFooter,
} from "./style";
import LinkedInIcon from "@/../public/assets/icons/linkedin.webp";
import FacebookIcon from "@/../public/assets/icons/facebook.webp";
import InstagramIcon from "@/../public/assets/icons/instagram.webp";
import TikTokIcon from "@/../public/assets/icons/tiktok.webp";
import YoutubeIcon from "@/../public/assets/icons/youtube-icon.svg";
import Image from "next/image";
import NewsLetter from "../news-letter";
import useAppContext from "@/hooks/useAppContext";
import StdButton from "../generics/StdButton/StdButton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import wave from "../../../public/assets/wave-desktop.svg";
import { useRouter } from "next/router";
import { EPagesNames } from "@/utils/enums/pagesNames.enum";

export default function Footer({usePageBody}: IFooter) {
  const route = useRouter();

  const { isMobile } = useAppContext();

  const onGoToNextPage = (page: EPagesNames) => route.push(`/${page}`);

  const handleGoToFaq = () => onGoToNextPage(EPagesNames.FAQ);

  const handleGoToCareerBlog = () => onGoToNextPage(EPagesNames.CAREER_BLOG);

  const handleGoToAboutUs = () => onGoToNextPage(EPagesNames.ABOUT_US);

  const handleGoToServices = () => onGoToNextPage(EPagesNames.SERVICES);

  const handleGoToJobs = () => onGoToNextPage(EPagesNames.JOBS);

  const handleGoToLegal = () => onGoToNextPage(EPagesNames.LEGAL_NOTICE);

  const handleGoToPrivacy = () => onGoToNextPage(EPagesNames.PRIVACY_POLICY);

  const handleGoToTerms = () => onGoToNextPage(EPagesNames.TERMS);

  return (
    <FooterContainer usePageBody={usePageBody}>
      {isMobile && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -40 1440 320"
          style={{ marginBottom: "-10px", backgroundColor: 'white' }}
        >
          <path
            fill="#0073CF"
            fillOpacity="10"
            d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,245.3C672,245,768,171,864,117.3C960,64,1056,32,1152,37.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      )}
      <StyledFooter style={{ paddingTop: isMobile ? 0 : 130 }}>
        {!isMobile && (
          <div
            style={{ backgroundImage: `url(${wave.src})` }}
            className="wave"
          ></div>
        )}
        <FooterContentWrapper>
          <NewsLetter />
          <FooterLinksContentWrapper>
            <FooterLinks width="400px" alignItems="start">
              <h3>Contact us</h3>
              <p>
                Also check out the section{" "}
                <span onClick={handleGoToFaq}>
                  "Frequently asked questions"
                </span>{" "}
                and <span onClick={handleGoToCareerBlog}>"Career Blogs"</span>.
                Maybe your question is already answered there.
              </p>
              <StdButton
                style={{
                  display: "flex",
                  alignItems: `${isMobile ? "center" : ""}`,
                  justifyContent: `${isMobile ? "center" : ""}`,
                  width: `${isMobile ? "143px" : "210px"}`,
                  padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
                  fontSize: `${isMobile ? "12px" : "16px"}`,
                }}
                icon={faEnvelope}
              >
                Contact Us
              </StdButton>
            </FooterLinks>
            <FooterLinks>
              {" "}
              <h3>Quick links</h3>
              <li onClick={handleGoToAboutUs}>About Us</li>
              <li onClick={handleGoToServices}>Services</li>
              <li onClick={handleGoToJobs}>Jobs</li>
              <li onClick={handleGoToCareerBlog}>Career Blog</li>
            </FooterLinks>
            <FooterLinks>
              <h3>Useful links</h3>
              <li onClick={handleGoToLegal}>Legal notice</li>
              <li onClick={handleGoToPrivacy}>Privacy Policy</li>
              <li onClick={handleGoToTerms}>Terms and Conditions</li>
              <li onClick={handleGoToFaq}>FAQ</li>
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
    </FooterContainer>
  );
}
