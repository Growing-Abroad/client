import { CSSProperties } from 'styled-components';
import { TwoColorTitleWrapper, Text } from './style';
export interface TwoColorTitleParameters {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fullWidth?: boolean;
  wrapperStyles?: CSSProperties;
  fontSize?: string;
  color?: string;
  styles?: CSSProperties;
  as?: keyof JSX.IntrinsicElements
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
      <Text color={'primaryBlue'} styles={{...styles, ...rest}} as={as || 'h1'} >
        {text1}
        {hasSpaceBtw ? '\xa0' : ''}
      </Text>
      <Text color={'secondaryBlue'} styles={{...styles, ...rest}} as={as || 'h1'} >
        {text2}
      </Text>
    </TwoColorTitleWrapper >
  );
}

export default TwoColorTitle;
