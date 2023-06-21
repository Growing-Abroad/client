import Image from "next/image";
import { Wrapper } from "./style";
import { CSSProperties } from "styled-components";
import curved from "@/../public/assets/border-bottom.jpg";
import curlyWave from "@/../public/assets/images/components/PageBody/curly-wave.jpg";
import useAppContext from "@/hooks/useAppContext";

export enum EWaveType {
  linear = "linear",
  curly = "curly",
}

export interface WaveParameters {
  type?: EWaveType;
  styles?: CSSProperties;
  height?: string;
  className?: string;
}

const Wave: React.FC<WaveParameters> = ({
  height,
  styles,
  type = EWaveType.linear,
  className,
}) => {
  const { isMobile } = useAppContext();

  function getWaveType() {
    if (type === EWaveType.linear) {
      return isMobile ? curved.src : curved.src;
    }
    if (type === EWaveType.curly) {
      return isMobile ? curlyWave.src : curlyWave.src;
    }
    return curved.src;
  }

  return (
    <Wrapper height={height} style={{ ...styles }} waveType={type}>
      <Image
        src={getWaveType()}
        style={{ bottom: "-2px" }}
        className={className}
        alt="white border"
        fill={true}
      />
    </Wrapper>
  );
};
export default Wave;
