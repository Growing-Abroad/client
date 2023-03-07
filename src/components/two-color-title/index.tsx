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
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,
  fullWidth,
  wrapperStyles,
  ...styles
}) => {
  return (
    <TwoColorTitleWrapper style={{ width: fullWidth ? '100%' : '100%', ...wrapperStyles}}>
      <Text color={'primaryBlue'} styles={{...styles}}>
        {text1}
        {hasSpaceBtw ? '\xa0' : ''}
      </Text>
      <Text color={'secondaryBlue'} styles={{...styles}}>
        {text2}
      </Text>
    </TwoColorTitleWrapper >
  );
}

export default TwoColorTitle;
