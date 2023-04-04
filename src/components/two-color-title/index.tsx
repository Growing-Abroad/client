import { ReactNode } from 'react';
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
  text2IsAChildren?: boolean;
  children?: ReactNode;
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
  text2IsAChildren,
  children,
  ...rest
}) => {
  return (
    <TwoColorTitleWrapper style={wrapperStyles}>
      {text1 && (
        <Text
          color={'blue700'}
          className={className}
          style={{ ...styles, ...rest }}
          as={as || 'h1'}
        >
          {text1}
          {hasSpaceBtw ? '\xa0' : ''}
          {breakingLine && <br />}
          <ColoredSpan color={'blue400'} style={{ ...styles, ...rest }}>
            {!text2IsAChildren ? text2 : children ?? ''}
          </ColoredSpan>
        </Text>
      )}
    </TwoColorTitleWrapper>
  );
};

export default TwoColorTitle;
