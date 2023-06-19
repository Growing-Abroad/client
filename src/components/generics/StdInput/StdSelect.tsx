import { MenuItem, Select as SelectMui, SelectProps } from "@mui/material"
import { useFormContext } from "react-hook-form"
import styled from "styled-components"
import { theme } from "@/styles/theme"


const Select = styled(SelectMui)`
  border-radius: 10px;
  font-size: '1rem';
  line-height: '1.25rem';
`

interface ISelectProps extends SelectProps {
  value?: string
  name: string
  onChange: (event: any) => void
  required: boolean
  options: {
    value: string
    label: string
  }[]
}

const StdSelect = ({
  required = false,
  name,
  value,
  onChange,
  options,
  ...rest
}: ISelectProps) => {
  const { register } = useFormContext()
  const { colors: { blue700 }} = theme

  return (
    <Select
      {...rest} {...register(name, { required })}
      sx={{
        fieldset: {
          border: `1px solid ${blue700}`,
        }
      }}
      value={value}
      onChange={onChange}
    >
      {options?.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
      ))}
    </Select>
  )
}

export default StdSelect
