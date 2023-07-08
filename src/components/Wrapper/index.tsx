import {WrapperComponent} from './style';

export function Wrapper({ children}: {children: React.ReactNode}) {
  return <WrapperComponent>{children}</WrapperComponent>
}
