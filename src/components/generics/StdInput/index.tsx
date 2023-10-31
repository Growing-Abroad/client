import { theme } from "@/styles/theme"
import styled from "styled-components"
import StdError from "../StdError"
import { ReactNode } from "react"

const { colors: { blue700 }} = theme

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: baseline;
`

const Label = styled.label`
  color: ${blue700};
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-bottom: 4px;
`

export interface IStdInputProps {
  label: string
  name: string
  required?: boolean
  errorMessage?: string
  children: ReactNode
}

export default function StdInput({
  label,
  name,
  required = false,
  errorMessage = '',
  children,
}: IStdInputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}{required && "*"}</Label>
      {children}
      <StdError>{errorMessage}</StdError>
    </InputWrapper>
    )
}
