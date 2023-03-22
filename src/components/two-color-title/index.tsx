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
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,
  fullWidth,
  wrapperStyles,
  className,
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
          <ColoredSpan color={'secondaryBlue'}>{text2}</ColoredSpan>
        </Text>
      )}
    </TwoColorTitleWrapper>
  );
};

export default TwoColorTitle;
