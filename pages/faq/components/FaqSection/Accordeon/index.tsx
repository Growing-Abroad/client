import { useState } from 'react';
import {
  AccordeonHeader,
  AccordeonButton,
  AccordeonContent,
  AccordeonTitle,
  AccordeonWrapper,
} from './style';
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
      <AccordeonHeader  isOpen={isOpen}>
        <AccordeonTitle>
        {title}
        </AccordeonTitle>
        {isOpen ? (
          <AccordeonButton bgColor="#05335B" onClick={toggleContent}>
            <svg
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40039 1.39062L9.65698 9.6099L17.9136 1.39062"
                stroke="white"
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin="round"
              />
            </svg>
          </AccordeonButton>
        ) : (
          <AccordeonButton bgColor="white" onClick={toggleContent}>
            <svg
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.54688 17.916L9.76615 9.65943L1.54688 1.40284"
                stroke="#05335B"
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin="round"
              />
            </svg>
          </AccordeonButton>
        )}
      </AccordeonHeader>
      {isOpen && (
        <AccordeonContent>
         {content}
        </AccordeonContent>
      )}
    </AccordeonWrapper>
  );
}

export default Accordeon;
