import { theme } from "@/styles/theme";
import styled from "styled-components";

const { colors: { blue700 }} = theme;

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

const Input = styled.input`
    all: unset;
    color: ${blue700};
    border: 1px solid ${blue700};
    border-radius: 10px;
    padding: 16px;
    font-size: 1rem;
    line-height: 1.25rem;
`

const Error = styled.span`
    color: red;
    font-size: 0.75rem;
    line-height: .875rem;
    margin-left: 16px;
    font-weight: 500;
`

export interface IInputProps {
    label: string,
    value: string,
    name: string,
    onChange: (value: string) => void;
    required?: boolean
}

export default function StdInput({label, value, name, onChange, required = false}: IInputProps) {
    return(
        <InputWrapper>
            <Label htmlFor={name}>{label}{required && "*"}</Label>
            <Input name={name} onChange={(e) => onChange(e.target.value)} />
            <Error>testando erro</Error>
        </InputWrapper>    
    )
}