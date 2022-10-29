import { theme } from '../../styles/theme';

export interface TwoColorTitleParameters {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fontSize: string;
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
    <div style={{ fontWeight: 600 }}>
      <span style={{ color: primaryBlue, fontSize }}>{text1}</span>
      {hasSpaceBtw && ' '}
      <span style={{ color: secondaryBlue, fontSize }}>{text2}</span>
    </div>
  );
}
