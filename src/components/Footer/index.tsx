import * as S from "./style";
import LinkedInIcon from "@/../public/assets/icons/linkedin.jpg";
import discordLogoIcon from "@/../public/assets/icons/discord-logo.jpg";
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
import Link from "next/link";

export default function Footer({usePageBody, hideBlueSection}: S.IFooter) {
  const route = useRouter();

  const { isMobile } = useAppContext();

  const onGoToNextPage = (page: EPagesNames) => route.push(`/${page}`);

  const handleGoToFaq = () => onGoToNextPage(EPagesNames.FAQ);

  const handleGoToTalentPool = () => onGoToNextPage(EPagesNames.JOBS);

  const handleGoToAboutUs = () => onGoToNextPage(EPagesNames.ABOUT_US);

  const handleGoToContactUs = () => onGoToNextPage(EPagesNames.CONTACT_US);

  const handleGoToOnlineCourse = () => onGoToNextPage(EPagesNames.ONLINE_COURSE);

  const handleGoToCoaching = () => onGoToNextPage(EPagesNames.COACHING);

  const handleGoToLegal = () => onGoToNextPage(EPagesNames.LEGAL_NOTICE);

  const handleGoToPrivacy = () => onGoToNextPage(EPagesNames.PRIVACY_POLICY);

  const handleGoToPrivacyApplicants = () => onGoToNextPage(EPagesNames.PRIVACY_APPLICANTS);

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
                      Maybe your question is already answered there.
                    </p>
                    <S.StdButtonCustom onClick={handleGoToContactUs}
                      icon={faEnvelope}
                    >
                      Contact Us
                    </S.StdButtonCustom>
                  </S.FooterLinks>
                  <S.FooterLinks>
                    {" "}
                    <h3>Quick links</h3>
                    <li onClick={handleGoToAboutUs}>About Us</li>
                    <li onClick={handleGoToOnlineCourse}>Online Course</li>
                    <li onClick={handleGoToCoaching}>Coaching</li>
                    <li onClick={handleGoToTalentPool}>Talent Pool</li>
                  </S.FooterLinks>
                  <S.FooterLinks>
                    <h3>Useful links</h3>
                    <li onClick={handleGoToFaq}>FAQ</li>
                    <li onClick={handleGoToPrivacy}>Privacy Policy</li>
                    <li onClick={handleGoToPrivacyApplicants}>Privacy Applicants</li>
                    <li onClick={handleGoToLegal}>Legal Notice</li>
                  </S.FooterLinks>
                  <S.FooterLinks>
                    <h3>Social media</h3>
                    <S.SocialMedia>
                      <Link target="_blank" href="https://www.instagram.com/growing.abroad/" >
                        <Image
                          src={InstagramIcon}
                          alt="instagram icon"
                          height={26}
                          width={26}
                        />
                      </Link>
                      <Link target="_blank" href="https://www.tiktok.com/@growing.abroad" >
                        <Image
                          src={TikTokIcon}
                          alt="tiktok icon"
                          height={26}
                          width={26}
                        />
                      </Link>
                      <Link target="_blank" href="https://www.youtube.com/channel/UCFlN7h2oM6fR5vfgPUQ-xLQ" >
                        <Image
                          src={YoutubeIcon}
                          alt="youtube icon"
                          height={26}
                          width={26}
                        />
                      </Link>
                      <Link target="_blank" href="https://discord.com/invite/5kGd44eA" >
                        <Image
                          src={discordLogoIcon}
                          alt="discord icon"
                          height={26}
                          width={26}
                        />
                      </Link>
                      <Link target="_blank" href="https://www.linkedin.com/company/growing.abroad/"> 
                        <Image
                          src={LinkedInIcon}
                          alt="linkedin icon"
                          height={26}
                          width={26}
                        />
                      </Link>
                    </S.SocialMedia>
                  </S.FooterLinks>
                </S.FooterLinksContentWrapper>
              </S.FooterContentWrapper>
              <S.FooterBottomContainer>
                <S.FooterBottomWrapper>
                  <span> Copyright &copy;&nbsp;2023 Growing Abroad </span>
                  <S.FooterBottomRight>
                    <S.Links href="/legal-notice">Legal Notice</S.Links>
                    <S.Links href="/data-privacy">Data Privacy</S.Links>
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
                  <span> Copyright &copy;&nbsp;2023 Growing Abroad </span>
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
