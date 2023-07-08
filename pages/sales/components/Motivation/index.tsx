import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import WhyBuyCourse from "@pages/online-course/components/WhyBuyCourse";


export function Motivation() {
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
