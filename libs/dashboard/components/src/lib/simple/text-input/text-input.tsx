import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { InputBaseProps } from "@mui/material/InputBase";

/* eslint-disable-next-line */
export interface StandardTextInputProps {
  label: string;
  required?: boolean;
  sx?: object;
  dataTestId: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: InputBaseProps["onBlur"];
  type?: string;
  value?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  variant?: "outlined" | "standard" | "filled" | undefined;
  size?: "medium" | "small" | undefined;
  startAdornment?: React.ReactNode;
  fullWidth?: boolean;
  autoComplete?: string;
}

export const TextInput: React.FC<StandardTextInputProps> = (props) => {
  // Separating props for a mix of usages, with defaults for sx.
  const {
    startAdornment,
    helperText,
    dataTestId,
    sx,
    variant,
    fullWidth,
    ...rest
  } = props;
  const localSx = { ...{ width: "100%", height: "54px" }, ...sx };
  return (
    <TextField
      helperText={helperText}
      InputProps={{
        startAdornment,
      }}
      data-testid={dataTestId}
      {...rest}
      variant={variant ? variant : "standard"}
      sx={(theme) => ({
        label: {
          color: theme.palette.text.primary,
        },
        ...localSx,
      })}
      margin="normal"
    />
  );
};

export default TextInput;
