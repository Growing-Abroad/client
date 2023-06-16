import StdButton from "@/components/generics/StdButton/StdButton";
import threePersons from "@/../public/assets/images/card-online-course-goals.webp";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import { IconCheck } from "@/components/Icons";
import WhyBuyCourse from "@pages/online-course/components/WhyBuyCourse";


export function Motivation() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse className="motivacion">
      <S.MotivationTitle
        text1="... Then join our Online Course for "
        text2="Successful Motivated Foreigners to ..."
        hasSpaceBtw
        className="title-why-buy-course"
      />
        
      <WhyBuyCourse />
    </S.WrapperWhyBuyCourse>
  );
}

export default Motivation;
