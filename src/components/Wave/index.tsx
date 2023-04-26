import Image from "next/image";
import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { CSSProperties } from "styled-components";
import curved from "@/../public/assets/border-bottom.webp"
import curvedMobile from "@/../public/assets/wave-mobile.svg"
import undulated from "@/../public/assets/pages/main-page/hero-section-mask.svg"
import undulatedMobile from "@/../public/assets/wave-undulated-mobile.svg";
import useAppContext from "@/hooks/useAppContext";

export interface WaveParameters {
  type: number;
  styles?: CSSProperties;
  height: string;
  className?: string;
}
const Wave: React.FC<WaveParameters> = ({ height, styles, type,className }) => {
  console.log(curved.src)
  const {isMobile} = useAppContext();
  const [typeWave, setTypeWave] = useState("");
  const [typeWaveMobile, setTypeWaveMobile] = useState("");
  useEffect(() => {
    if (type === 1) {
      setTypeWave(curved.src);
      setTypeWaveMobile(curvedMobile.src);
    } else {
      setTypeWave(undulated.src);
      setTypeWaveMobile(undulatedMobile.src);

    }
  }, [type]);

  return (
    <Wrapper height={height} style={{ ...styles }} >
      <Image  src={isMobile? typeWaveMobile:typeWave} className={className} alt="white border" width={isMobile ? 430 : 1530} height={isMobile?234 :160}/>
    </Wrapper>
  );
};
export default Wave;
