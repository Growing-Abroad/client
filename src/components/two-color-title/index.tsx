import { theme } from '@styles/theme';
import { TwoColorTitleWrapper } from './style';

export interface TwoColorTitleParameters {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fontSize?: string;
}

export default function TwoColorTitle({
  text1,
  text2,
  hasSpaceBtw,
  fontSize,
}: TwoColorTitleParameters) {
  const {
    colors: { primaryBlue, secondaryBlue },
  } = theme;

  return (
    <TwoColorTitleWrapper style={{ gap: hasSpaceBtw ? '8px' : '0' }}>
      <span style={{ color: primaryBlue, fontSize: fontSize || '32px' }}>
        {text1}
      </span>
      <span style={{ color: secondaryBlue, fontSize: fontSize || '32px' }}>
        {text2}
      </span>
    </TwoColorTitleWrapper>
  );
}
