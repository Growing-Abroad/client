import { FormEvent } from "react";
import TwoColorTitle from "../two-color-title";
import { useWindowSize } from "@hooks/useWindowSize";
import { CheckboxWrapper, NewsLetterContainer, InputNewsLetter } from "./style";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import {  Button } from "@styles/global-styles";
import { variables } from "@styles/global-variables";

export default function NewsLetter() {
  const [width] = useWindowSize();

  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = "false";
    } else {
      e.currentTarget.value = "true";
    }
  };

  return (
    <NewsLetterContainer>
      <TwoColorTitle
        text1="Join Our Newsletter"
        text2="Letter"
        fontSize="40px"
        fullWidth
        style={{
          marginBottom:"26px",
          justifyContent:
            width < removePxFromCssValue(variables.sizes.mediaQuery)
              ? "center"
              : "flex-start",
        }}
      />
      <div  style={{
          display: "flex",
          flexDirection: "row",
          gap:"26px",
          width: "100%",
        }}>
      <InputNewsLetter
        placeholder="Name"
      />
      <InputNewsLetter placeholder="E-mail" />
      <Button fontSize="16px">Subscribe</Button>
      </div>

    </NewsLetterContainer>
  );
}
