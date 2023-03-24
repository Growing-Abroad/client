import { CSSProperties } from 'styled-components';
import { TwoColorTitleWrapper, Text, ColoredSpan, IText } from './style';
export interface TwoColorTitleParameters extends IText {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fullWidth?: boolean;
  wrapperStyles?: CSSProperties;
  fontSize?: string;
  styles?: CSSProperties;
  className?: string;
  breakingLine?: boolean;
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,
  fullWidth,
  wrapperStyles,
  className,
  breakingLine,
  as,
  styles,
  ...rest
}) => {
  return (
    <TwoColorTitleWrapper style={wrapperStyles}>
      {text1 && (
        <Text
          color={'primaryBlue'}
          className={className}
          style={{ ...styles, ...rest }}
          as={as || 'h1'}
        >
          {text1}
          {hasSpaceBtw ? '\xa0' : ''}
          {breakingLine && <br />}
          <ColoredSpan color={'secondaryBlue'} style={{ ...styles, ...rest }}>
            {text2}
          </ColoredSpan>
        </Text>
      )}
    </TwoColorTitleWrapper>
  );
};

export default TwoColorTitle;
