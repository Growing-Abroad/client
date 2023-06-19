import { Checkbox, FormControlLabel, Typography, FormControlLabelProps } from "@mui/material"
import { useTheme } from "styled-components";

interface IStdCheckbox extends FormControlLabelProps {
  label: string
}

const StdCheckbox = ({ label, ...props }: IStdCheckbox ) => {
  const { colors: { blue700 } } = useTheme();

  return (
    <FormControlLabel
      {...props}
      label={(
        <Typography
          sx={{
            fontFamily: 'inherit',
          }}
        >
          {label}
        </Typography>
      )}
      control={
        <Checkbox
          sx={{
            color: blue700,
            '&.Mui-checked': {
              color: blue700,
            },
          }}
        />
      }
    />
)
}

export default StdCheckbox
