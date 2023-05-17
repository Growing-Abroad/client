import Image from "next/image";
import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { CSSProperties } from "styled-components";
import curved from "@/../public/assets/border-bottom.webp"
import curvedMobile from "@/../public/assets/wave-mobile.svg"
import curlyWave from "@/../public/assets/images/components/PageBody/curly-wave.webp"
import undulatedMobile from "@/../public/assets/wave-undulated-mobile.svg";
import useAppContext from "@/hooks/useAppContext";

export enum EWaveType {
  linear = 'linear',
  curly = 'curly'
}

export interface WaveParameters {
  type?: EWaveType;
  styles?: CSSProperties;
  height?: string;
  className?: string;
}

const Wave: React.FC<WaveParameters> = ({ height, styles, type = EWaveType.linear,className }) => {
  const {isMobile} = useAppContext();
  const [typeWave, setTypeWave] = useState("");
  const [typeWaveMobile, setTypeWaveMobile] = useState("");

  useEffect(() => {
    if (type === EWaveType.linear) {
      setTypeWave(curved.src);
      setTypeWaveMobile(curvedMobile.src);
    } 
    if (type === EWaveType.curly) {
      setTypeWave(curlyWave.src);
      setTypeWaveMobile(undulatedMobile.src);

    }
  }, [type]);

  function getWaveType() {
    if (type === EWaveType.linear) {
      return isMobile ? curvedMobile.src : curved.src
    } 
    if (type === EWaveType.curly) {
      return isMobile ? undulatedMobile.src : curlyWave.src
    }
  }

  return (
    <Wrapper height={height} style={{ ...styles }} waveType={type} >
      <Image src={getWaveType()} style={{bottom: '-2px'}} className={className} alt="white border" fill={true} />
    </Wrapper>
  );
};
export default Wave;
