import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";

export interface TimeSheetStandardTextInputProps {
  label: string;
  required?: boolean;
  sx?: object;
  dataTestId: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  variant?: "outlined" | "standard" | "filled" | undefined;
  size?: "medium" | "small" | undefined;
  startAdornment?: React.ReactNode;
  onBlur?: () => void;
  tabIndex?: number;
  nextTab?: string;
  preTab?: string;
  disabled?: boolean;
  colorLabel?: string | null;
  color?: string | null;
  colorDisabled?: string | null;
}

export const TimeSheetTextInput: React.FC<TimeSheetStandardTextInputProps> = (
  props
) => {
  // Separating props for a mix of usages, with defaults for sx.
  const {
    startAdornment,
    helperText,
    dataTestId,
    sx,
    variant,
    tabIndex,
    nextTab,
    preTab,
    colorLabel,
    color,
    colorDisabled,
    ...rest
  } = props;
  const localSx = {
    ...{
      width: "100%",
      height: "54px",
      "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: colorDisabled,
      },
    },
    ...sx,
  };

  return (
    <TextField
      helperText={helperText}
      InputProps={{
        startAdornment,
        inputProps: { tabIndex, nexttab: nextTab, pretab: preTab },
      }}
      data-testid={dataTestId}
      {...rest}
      variant={variant ? variant : "standard"}
      sx={(theme) => ({
        label: {
          color: theme.palette.text.primary,
        },
        input: {
          color,
        },
        ...localSx,
      })}
      InputLabelProps={{
        sx: {
          [`&.${inputLabelClasses.shrink}`]: {
            color: colorLabel,
          },
        },
      }}
      margin="normal"
    />
  );
};

export default TimeSheetTextInput;
