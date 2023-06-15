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

export default function Footer({usePageBody, hideBlueSection}: IFooter) {
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
        {!hideBlueSection 
          && 
          <>
            <StyledFooter style={{ paddingTop: isMobile ? 0 : 130 }}>
              <div
              style={{ backgroundImage: `url(${wave.src})` }}
              className="wave wave-desktop"
              ></div>
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
                        margin: "0"
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
          </>
        }
        {
          hideBlueSection 
          &&  <FooterBottomContainer>
                <FooterBottomWrapper>
                  <span> Copyright &copy;&nbsp;2022 Growing Abroad </span>
                  <FooterBottomRight>
                    <Links href="#">Legal Notice</Links>
                    <Links href="#">Data Privacy</Links>
                  </FooterBottomRight>
                </FooterBottomWrapper>
              </FooterBottomContainer>
        }
        

    </FooterContainer>
  );
}
