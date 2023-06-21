import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.span`
  color: red;
  font-size: 0.75rem;
  line-height: .875rem;
  margin-left: 16px;
  font-weight: 500;
  height: 14px;
`

const StdError = ({ children }: { children?: ReactNode }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default StdError
