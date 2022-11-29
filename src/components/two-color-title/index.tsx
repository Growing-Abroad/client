import { theme } from '@styles/theme';
import { TwoColorTitleWrapper } from './style';

export interface TwoColorTitleParameters {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fontSize?: string;
  style?: any;
  fullWidth?: boolean;
  upperCase?: boolean
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,
  fontSize,
  fullWidth,
  upperCase,
  style
}) => {
  const {
    colors: { primaryBlue, secondaryBlue },
  } = theme;

  return (
    <TwoColorTitleWrapper style={{ gap: hasSpaceBtw ? '12px' : '0', width: fullWidth ? '100%' : '100%', ...style }}>
      <span style={{ color: primaryBlue, fontSize: fontSize || '', textTransform: upperCase ? 'uppercase' : 'initial' }}>
        {text1}
      </span>
      <span style={{ color: secondaryBlue, fontSize: fontSize || '', textTransform: upperCase ? 'uppercase' : 'initial' }}>
        {text2}
      </span>
    </TwoColorTitleWrapper >
  );
}

export default TwoColorTitle;
