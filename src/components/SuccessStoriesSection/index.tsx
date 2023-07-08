import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const SuccessStoriesSection = ({children}: Props) => {

  return (
    <S.SuccessStoriesWrapperSection>
      {children}
    </S.SuccessStoriesWrapperSection>
  );
}
