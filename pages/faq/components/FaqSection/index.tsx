import { useState } from "react";
import { Container } from "../../../../styles/faq/FaqSection/style";
import Accordeon from "./Accordeon";

function FaqSection() {
  const accordeons = [
    {
      title: "What is Webflow and why is it the best website builder?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
    },
    {
      title: "What is your favorite template from BRIX Templates?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
    },
    {
      title: "How do you clone a Webflow Template from the Showcase?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
    },
    {
      title: "Why is BRIX Templates the best Webflow agency out there?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
    },
  ];
  return (
    <Container>
      {accordeons.map((accordeon, index) => {
        return (
          <Accordeon
            title={accordeon.title}
            content={accordeon.content}
            key={index}
          />
        );
      })}
    </Container>
  );
}

export default FaqSection;
