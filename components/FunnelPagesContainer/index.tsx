import { PropsWithChildren } from 'react';
import * as S from './styles';


export default function FunnelPagesContainer(props: PropsWithChildren) {
  return(
    <S.FunnelPagesContainer>
      <div className="funnel-page-content-wrapper">
        {props.children}
      </div>
    </S.FunnelPagesContainer>
  );
}
