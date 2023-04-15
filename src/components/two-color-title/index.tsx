import { theme } from '@/styles/theme';
import { CSSProperties } from 'styled-components';
import { TwoColorTitleWrapper, Text, ColoredSpan, IText } from './style';

const {
  colors: { blue700, blue400 },
} = theme;

export interface TwoColorTitleParameters extends IText {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  wrapperStyles?: CSSProperties;
  fontSize?: string;
  styles?: CSSProperties;
  className?: string;
  breakingLine?: boolean;
  color1?: string;
  color2?: string;
  wrapperClassName?: string
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,
  wrapperStyles,
  className,
  breakingLine,
  as,
  styles,
  color1,
  color2,
  wrapperClassName,
  ...rest
}) => {
  return (
    <TwoColorTitleWrapper style={wrapperStyles} className={wrapperClassName}>
      {text1 && (
        <Text
          color={color1 ? color1 : blue700}
          className={className}
          style={{ ...styles, ...rest }}
          as={as || 'h1'}
        >
          {text1}
          {hasSpaceBtw ? '\xa0' : ''}
          {breakingLine && <br />}
          <ColoredSpan
            color={color2 ? color2 : blue400}
            style={{ ...styles, ...rest }}
          >
            {text2}
          </ColoredSpan>
        </Text>
      )}
    </TwoColorTitleWrapper>
  );
};

export default TwoColorTitle;
