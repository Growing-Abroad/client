import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@/../public/assets/cta-img.svg";
import Image from "next/image";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function CTAction() {
  const { isMobile } = useAppContext();

  const {
    windowSize: { width },
  } = useAppContext();

  return (
    <S.BackgroudCTA style={{ maxHeight: `${isMobile ? "830px" : ""}` }}>
      <S.BannerMainContainer>
        <section
          className="left-side"
          style={{ gap: "23px",  }}
        >
          <h1>
            Land your Dream Job in <span>Germany</span> or <span>Europe</span>
          </h1>
          <span
            style={{
              color: "white",
              fontSize: `${isMobile ? "16px" : "1.3rem"}`,
              fontWeight: 400,
              lineHeight: "38px",
              width: `${isMobile ? "323px" : "30rem"}`,
            }}
          >
            Build a successful career abroad with this amazing ONLINE COURSE
          </span>
          <StdButton>Buy Online Course Now</StdButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <Image
              src={gaCoaches}
              alt="growing abroad coaches"
              width={616}
              style={{ objectFit: "contain", border: "1px solid transparent" }}
            />
          </div>
        </section>
      </S.BannerMainContainer>
    </S.BackgroudCTA>
  );
}

export default CTAction;
