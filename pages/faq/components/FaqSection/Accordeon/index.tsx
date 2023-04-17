import { useState } from "react";
import {
  AccordeonHeader,
  AccordeonContent,
  AccordeonTitle,
  AccordeonWrapper,
} from "../../../../../styles/faq/FaqSection/Accordeon/index.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";



interface AccordeonProps {
  title: string;
  content: string;
}
function Accordeon({ title, content }: AccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordeonWrapper isOpen={isOpen}>
      <AccordeonHeader isOpen={isOpen} onClick={toggleContent}>
        <AccordeonTitle>{title}</AccordeonTitle>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronLeft} size="lg" className={"accordeon-icon" + isOpen && ' open'} style={{marginTop: '6px', width: '20px'}} />
      </AccordeonHeader>
      {isOpen && <AccordeonContent isOpen={isOpen}>{content}</AccordeonContent>}
    </AccordeonWrapper>
  );
}

export default Accordeon;
