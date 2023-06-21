import * as S from "./style";
import LinkedInIcon from "@/../public/assets/icons/linkedin.jpg";
import FacebookIcon from "@/../public/assets/icons/facebook.jpg";
import InstagramIcon from "@/../public/assets/icons/instagram.jpg";
import TikTokIcon from "@/../public/assets/icons/tiktok.jpg";
import YoutubeIcon from "@/../public/assets/icons/youtube-icon.svg";
import Image from "next/image";
import NewsLetter from "../news-letter";
import useAppContext from "@/hooks/useAppContext";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import wave from "../../../public/assets/wave-desktop.svg";
import { useRouter } from "next/router";
import { EPagesNames } from "@/utils/enums/pagesNames.enum";

export default function Footer({usePageBody, hideBlueSection}: S.IFooter) {
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
    <S.FooterContainer usePageBody={usePageBody}>
        {!hideBlueSection
          &&
          <>
            <S.StyledFooter style={{ paddingTop: isMobile ? 0 : 130 }}>
              <S.ImgBG
                style={{ backgroundImage: `url(${wave.src})` }}
                className="wave wave-desktop"
              ></S.ImgBG>
              <S.FooterContentWrapper>
                <NewsLetter />
                <S.FooterLinksContentWrapper>
                  <S.FooterLinks width="400px" alignItems="start">
                    <h3>Contact us</h3>
                    <p>
                      Also check out the section{" "}
                      <span onClick={handleGoToFaq}>
                        "Frequently asked questions"
                      </span>{" "}
                      and <span onClick={handleGoToCareerBlog}>"Career Blogs"</span>.
                      Maybe your question is already answered there.
                    </p>
                    <S.StdButtonCustom
                      icon={faEnvelope}
                    >
                      Contact Us
                    </S.StdButtonCustom>
                  </S.FooterLinks>
                  <S.FooterLinks>
                    {" "}
                    <h3>Quick links</h3>
                    <li onClick={handleGoToAboutUs}>About Us</li>
                    <li onClick={handleGoToServices}>Services</li>
                    <li onClick={handleGoToJobs}>Jobs</li>
                    <li onClick={handleGoToCareerBlog}>Career Blog</li>
                  </S.FooterLinks>
                  <S.FooterLinks>
                    <h3>Useful links</h3>
                    <li onClick={handleGoToLegal}>Legal notice</li>
                    <li onClick={handleGoToPrivacy}>Privacy Policy</li>
                    <li onClick={handleGoToTerms}>Terms and Conditions</li>
                    <li onClick={handleGoToFaq}>FAQ</li>
                  </S.FooterLinks>
                  <S.FooterLinks>
                    <h3>Social media</h3>
                    <S.SocialMedia>
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
                    </S.SocialMedia>
                  </S.FooterLinks>
                </S.FooterLinksContentWrapper>
              </S.FooterContentWrapper>
              <S.FooterBottomContainer>
                <S.FooterBottomWrapper>
                  <span> Copyright &copy;&nbsp;2022 Growing Abroad </span>
                  <S.FooterBottomRight>
                    <S.Links href="#">Legal Notice</S.Links>
                    <S.Links href="#">Data Privacy</S.Links>
                  </S.FooterBottomRight>
                </S.FooterBottomWrapper>
              </S.FooterBottomContainer>
            </S.StyledFooter>
          </>
        }
        {
          hideBlueSection
          &&  <S.FooterBottomContainer>
                <S.FooterBottomWrapper>
                  <span> Copyright &copy;&nbsp;2022 Growing Abroad </span>
                  <S.FooterBottomRight>
                    <S.Links href="/legal-notice">Legal Notice</S.Links>
                    <S.Links href="/data-privacy">Data Privacy</S.Links>
                  </S.FooterBottomRight>
                </S.FooterBottomWrapper>
              </S.FooterBottomContainer>
        }


    </S.FooterContainer>
  );
}
