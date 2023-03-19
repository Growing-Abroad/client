import { CSSProperties } from 'styled-components';
import { TwoColorTitleWrapper, Text, IText } from './style';
export interface TwoColorTitleParameters extends IText {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fullWidth?: boolean;
  wrapperStyles?: CSSProperties;
  fontSize?: string;
  styles?: CSSProperties;
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,  
  fullWidth,
  wrapperStyles,
  as,
  styles, 
  ...rest
}) => {
  return (
    <TwoColorTitleWrapper style={wrapperStyles}>
      {text1 && <Text color={'primaryBlue'} style={{...styles, ...rest}} as={as || 'h1'} >
        {text1}
        {hasSpaceBtw ? '\xa0' : ''}
      </Text>}
      {text2 && <Text color={'secondaryBlue'} style={{...styles, ...rest}} as={as || 'h1'} >
        {text2}
      </Text>}
    </TwoColorTitleWrapper >
  );
}

export default TwoColorTitle;
