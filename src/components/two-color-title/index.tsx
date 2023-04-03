import { theme } from '@/styles/theme';
import { CSSProperties, useTheme } from 'styled-components';
import { TwoColorTitleWrapper, Text, ColoredSpan, IText } from './style';

const { colors: { blue700, blue400 }} = theme;

export interface TwoColorTitleParameters extends IText {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fullWidth?: boolean;
  wrapperStyles?: CSSProperties;
  fontSize?: string;
  styles?: CSSProperties;
  className?: string;
  color1?: string;
  color2?: string;
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,  
  fullWidth,
  wrapperStyles,
  as,
  styles,
  color1,
  color2,
  className,
  ...rest
}) => {
  return (
    <TwoColorTitleWrapper style={wrapperStyles}>
      {text1 && (
        <Text
          color={color1 ? color1 : blue700}
          className={className}
          style={{ ...styles, ...rest }}
          as={as || 'h1'}
        >
          {text1}
          {hasSpaceBtw ? '\xa0' : ''}
          <ColoredSpan color={color2 ? color2 : blue400} style={{ ...styles, ...rest }}>{text2}</ColoredSpan>
        </Text>
      )}
    </TwoColorTitleWrapper>
  );
}

export default TwoColorTitle;
