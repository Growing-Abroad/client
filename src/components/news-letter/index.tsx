import { FormEvent } from "react";
import TwoColorTitle from "../two-color-title";
import { CheckboxWrapper, NewsLetterContainer } from "./style";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import { Input, Button } from "@styles/global-styles";
import { variables } from "@styles/global-variables";
import useAppContext from "@/hooks/useAppContext";

export default function NewsLetter() {
  const {windowSize: {width}} = useAppContext();

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
        text1="News"
        text2="Letter"
        styles={{fontSize: "32px"}}
        fullWidth
        wrapperStyles={{
          justifyContent:
            width < removePxFromCssValue(variables.sizes.mediaQuery)
              ? "center"
              : "flex-start",
        }}
      />
      <Input
        placeholder="Name"
        style={{
          margin: "16px 0px 8px",
        }}
      />
      <Input placeholder="E-mail" />
      <div
        style={{
          display: "flex",
          gap: "8px",
          margin: "18px 0",
        }}
      >
        <CheckboxWrapper>
          <input onClick={(e) => handleCheckBox(e)} type="checkbox" />
          <span></span>
        </CheckboxWrapper>
        <p style={{ fontSize: ".750rem" }}>
          Yes, I would like to sign up for the Growing Abroad Newsletter and I
          accept the websites Privacy Policy.
        </p>
      </div>
      <Button fontSize="24px">Subscribe</Button>
    </NewsLetterContainer>
  );
}
