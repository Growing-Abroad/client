import { ComponentPropsWithoutRef } from "react";
import Footer from "../Footer";
import HeaderForCandidates from "../HeaderForCandidates";
import HeaderForCompanies from "../HeaderForCompanies";
import HeaderForPublicRoutes from "../HeaderForPublicRoutes";

export enum ChosenHeader {
  DEFAULT = "DEFAULT",
  FOR_CANDIDATES = "FOR_CANDIDATES",
  FOR_COMPANIES = "FOR_COMPANIES",
}

interface Props extends ComponentPropsWithoutRef<"body"> {
  chosenHeader: ChosenHeader;
  usePageBody?: boolean;
}

interface HeaderProps {
  chosenHeader: ChosenHeader;
}

function Header({ chosenHeader }: HeaderProps) {
  switch (chosenHeader) {
    case ChosenHeader.FOR_CANDIDATES:
      return <HeaderForCandidates />;
    case ChosenHeader.FOR_COMPANIES:
      return <HeaderForCompanies />;
    case ChosenHeader.DEFAULT:
    default:
      return <HeaderForPublicRoutes />;
  }
}

function PageLayout(props: Props) {
  const { children, chosenHeader } = props;
  return (
    <>
      <Header chosenHeader={chosenHeader} />
      {children}
      <Footer usePageBody={props.usePageBody} />
    </>
  );
}

export default PageLayout;
