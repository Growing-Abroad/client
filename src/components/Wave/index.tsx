import Image from "next/image";
import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { CSSProperties } from "styled-components";
import curved from "@/../public/assets/border-bottom.webp"
import ondulated from "@/../public/assets/pages/main-page/hero-section-mask.svg"
import useAppContext from "@/hooks/useAppContext";

export interface WaveParameters {
  type: number;
  styles?: CSSProperties;
  height: string  ;
  className?: string;
}
const Wave: React.FC<WaveParameters> = ({ height, styles, type,className }) => {
  console.log(curved.src)
  const {isMobile} = useAppContext();
  const [typeWave, setTypeWave] = useState("");
  useEffect(() => {
    if (type === 1) {
      setTypeWave(curved.src);
    } else {
      setTypeWave(ondulated.src);
    }
  }, [type]);

  return (
    <Wrapper height={height} style={{ ...styles }}>
      <Image  src={typeWave} className={className} alt="white border" width={isMobile ? 430 : 1513} height={154}/>
    </Wrapper>
  );
};
export default Wave;
