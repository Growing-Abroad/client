import { TwoColorTitleWrapper, Text } from './style';
export interface TwoColorTitleParameters {
  text1: string;
  text2: string;
  hasSpaceBtw?: boolean;
  fontSize?: string;
  style?: any;
  fullWidth?: boolean;
}

const TwoColorTitle: React.FC<TwoColorTitleParameters> = ({
  text1,
  text2,
  hasSpaceBtw,
  fontSize,
  fullWidth,
  style
}) => {

  return (
    <TwoColorTitleWrapper style={{ gap: hasSpaceBtw ? '12px' : '0', width: fullWidth ? '100%' : '100%', ...style }}>
      <Text color={'primaryBlue'} fontSize={fontSize} >
        {text1}
      </Text>
      <Text color={'secondaryBlue'} fontSize={fontSize} >
        {text2}
      </Text>
    </TwoColorTitleWrapper >
  );
}

export default TwoColorTitle;
