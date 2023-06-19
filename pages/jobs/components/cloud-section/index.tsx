import Image from "next/image";
import styled from "styled-components";

import { variables } from "@/styles/global-variables";
import Cloud from "@assets/pages/jobs/cloud-img.png"
import TwoColorTitle from "@/components/two-color-title";
import { theme } from "@/styles/theme";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";

const { colors: { blue700 }} = theme;
const { sizes: { maxWidthAll, globalHorizontalPadding, mediaQuery }} = variables;

const CloudWrapper = styled.section`
  display: flex;
  padding-inline: ${globalHorizontalPadding};
  max-width: ${maxWidthAll};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 124px;
  gap: 24px;

  img {
    width: 100%;
    height: auto;
    max-width: 440px;
  }

  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap: 30px;
    padding-inline: 40px;
    margin-bottom: 40px;
  }
`

const CloudDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: flex-start;
  color: ${blue700};
  max-width: 500px;
  width: 100%;

  .heading3 {
    max-width: 100%;
    text-align: start;
    font-size: 1.5rem;
    line-height: 1.875rem;
    @media (max-width: ${mediaQuery}) {
      text-align: center;
    }
  }

  .cloud-paragraqh {
    font-weight: 500;

    @media (max-width: ${mediaQuery}) {
      text-align: center;
    }
  }


  @media (max-width: ${mediaQuery}) {
    gap: 25px;
  }
`


export default function CloudSection() {
    return (
        <CloudWrapper>
          <CloudDetails>
            <TwoColorTitle
              as="h3"
              text1="It doesn't get any smarter than this: We take care of your job search. Let us find you now!"
              text2=""
              className="heading3"
              wrapperStyles={{ maxWidth: '100%' }}
            />
            <StdParagraqh className="cloud-paragraqh">
              We work together with companies in Germany. These companies often ask us for suitable candidates for their job positions. By sending us your CV and application documents, you will have the possibility to register on our recruiting platform and maximize your chances to get a job this way. We will then go on a targeted job search for you and match your profile with the requirements of the companies. As soon as we have found a suitable job that fits your profile, we will contact you immediately - our service is of course free of charge.
            </StdParagraqh>
          </CloudDetails>

          <Image src={Cloud} alt="cloud image" />
        </CloudWrapper>
    )
}
