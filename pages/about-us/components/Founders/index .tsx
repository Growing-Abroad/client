import GrowingAbroadWorldwide from "@/../public/assets/pages/about-us/growing-abroad-worldwide.jpg";
import UAN from "@/../public/assets/pages/about-us/uan-growing-abroad.jpg";
import MANU from "@/../public/assets/pages/about-us/manuel-growing-abroad.jpg";
// import * as S from "./styles";
import * as S from "@/../styles/about-us/components/Founders/styles";

const Founders = () => {
  return (
    <div>
      <S.ContainerFounders>
        <S.UITwoColorTitle text1="Meet the " text2="Founders" hasSpaceBtw  />
        <S.ContentFounder>
          <S.ContentFounderItem>
            <S.Text sideImg="left">
              <S.ImageFounders sideImg="left" height={555} width={756} src={UAN} alt="uan photo"></S.ImageFounders>
              <span>
                <S.Span>UAN</S.Span> grew up in a small village in Brazil with
                limited opportunities. But he didn't let that stop him. When he
                was just 16, he joined Bosch and got to experience the German
                culture, which opened his eyes to new possibilities. With the help
                of mentors, he learned English and studied Business
                Administration.
                <br />
                <br />
                At 21, he applied to more than 100 companies for an internship
                abroad and finally got accepted at Bosch in Germany. It was tough
                because of the language and cultural differences, but Uan worked
                hard and learned a lot. He earned an MBA and a Master's degree in
                International Management in Germany.
                <br />
                <br />
                Today, Uan is a proud German citizen and works in management
                positions at companies like Bosch, Allianz, and Accenture. He
                understands what it takes to succeed in the job market. Uan wants
                to give back and help others who are looking for jobs in Germany,
                just like he did.
              </span>
            </S.Text>
          </S.ContentFounderItem>
        </S.ContentFounder>
        <S.ContainerImgCenter>
          <S.ImageCenter
            width={1188}
            height={444}
            src={GrowingAbroadWorldwide}
            alt="main  photo"
          ></S.ImageCenter>
        </S.ContainerImgCenter>
        <div>
          <div>
            <S.Text sideImg="right">
              <S.ImageFounders sideImg="right" height={555} width={756} src={MANU} alt="uan photo"></S.ImageFounders>

              <span>
                <S.Span>MANUEL</S.Span> was born and raised in Munich, Germany. He always had a
                passion for traveling and experiencing different cultures. He
                pursued a bachelor's degree in Business Administration at a top
                German university and worked as a recruiter in an HR Consulting
                company. Alongside his career, he followed his dream of becoming a
                professional actor, gaining insights into body language, voice,
                and confidence-building skills which are crucial for job
                interviews.
                <br />
                <br />
                Driven by a desire to support others, he became a certified coach
                and trainer, helping executives from international companies to
                present themselves confidently. He also works as a professor in
                universities teaching students how to present themselves in job
                interviews and making a positive first impression.
                <br />
                <br />
                With his knowledge and expertise he will guide you through the job
                application process and teach you the best techniques and tricks
                you can have in the German market.
              </span>
            </S.Text>
          </div>
        </div>
      </S.ContainerFounders>
    </div>
  );
};

export default Founders