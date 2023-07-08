import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface TextChangerProps {
  texts: string[];
  duration?: number;
}

const {
  colors: { blue500, blue700, yellow400 },
} = theme;

const UISpan = styled.span`
  font-weight: 600;
  animation-iteration-count: 1;
  position: relative;
  left: -200px;
  opacity: 0;
  animation-fill-mode: both;
  display: inline-block;
  color: ${blue500};
  animation: text-enter-germany 3000ms ease;

  @keyframes text-enter-germany {
    0% {
      left: -200px;
      color: ${blue500};
      visibility: hidden;
      opacity: 0;
    }
    20% {
      left: 0;
      visibility: visible;
      color: ${blue700};
    }
    40% {
      color: ${yellow400};
      opacity: 1;
    }
    80% {
      left: 0;
      visibility: visible;
      color: ${yellow400};
      opacity: 1;
    }
    100% {
      left: 200px;
      visibility: hidden;
      opacity: 0;
      color: ${blue500};
    }
  }
`;

export const TextChanger = ({ texts, duration = 3000 }: TextChangerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intl = useIntl();

  const t = (id: string): string => {
    return intl.formatMessage({ id });
  };

  const textsTranslations = texts.map((texts) => {
    return t(`${texts}`);
  });

  const currentName = textsTranslations[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((oldIndex) => (oldIndex + 1) % textsTranslations.length);
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, duration, textsTranslations.length]);

  return (
    <UISpan key={currentName}>
      {currentName}
    </UISpan>
  );
};
