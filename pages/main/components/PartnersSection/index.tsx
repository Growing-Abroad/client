import React from 'react';

import { Container, Title } from './styles';
import TwoColorTitle from '@/components/two-color-title';
import useAppContext from '../../../../src/hooks/useAppContext';

function PartnersSection() {
  const {
    windowSize: { width },
    smallDesktopSize,
  } = useAppContext();

  const shouldBreakLine: boolean = width < smallDesktopSize;

  return (
    <Container>
      <TwoColorTitle
        text1="Some of our"
        text2="Partners in Germany"
        hasSpaceBtw={!shouldBreakLine}
        breakingLine={shouldBreakLine}
      />
    </Container>
  );
}

export default PartnersSection;
