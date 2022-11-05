import { theme } from '../../styles/theme';

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
    <div style={{ fontWeight: 600 }}>
      <span style={{ color: primaryBlue, fontSize: fontSize || '32px' }}>
        {text1}
      </span>
      {hasSpaceBtw && ' '}
      <span style={{ color: secondaryBlue, fontSize: fontSize || '32px' }}>
        {text2}
      </span>
    </div>
  );
}
