import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import goCoachesMobile from "@/../public/assets/image-mainHero-mobile.png";
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";
import { useIntl } from "react-intl";
import { TextChanger } from "components/TextChanger";

function CTAction() {
  const { isMobile } = useAppContext();

  const imageSource = isMobile ? goCoachesMobile : gaCoaches;

  const intl = useIntl();

  const t = (id: string): string => {
    return intl.formatMessage({ id });
  };

  const texts = [
    "page.home.callToAction.germany",
    "page.home.callToAction.europe",
  ];

  const onlineCourseCTARightSideResponsivity = {
    marginTop: isMobile ? '1.5rem' : '3.5rem'
  }

  return (
    <></>
  );
}

export default CTAction;
