import { theme } from "@/styles/theme";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const { colors: { blue700 }} = theme;

const Input = styled.input`
  all: unset;
  color: ${blue700};
  border: 1px solid ${blue700};
  border-radius: 10px;
  padding: 16px;
  font-size: 1rem;
  line-height: 1.25rem;
`

export interface IStdTextInputProps {
  name: string,
  required?: boolean
}

export default function StdTextInput({
  name,
  required = false,
  ...rest
}: IStdTextInputProps) {
  const { register } = useFormContext()

  return(
    <Input
      {...rest} {...register(name, { required })}
      name={name}
    />
  )
}
