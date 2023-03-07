import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { InputBaseProps } from "@mui/material/InputBase";

/* eslint-disable-next-line */
export interface TextInputProps {
  label: string;
  required?: boolean;
  sx?: object;
  dataTestId: string;

  /* Don't use .onChange in an MUI Dialog; the cursor
      always resets to the end.  Use .onBlur instead. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: InputBaseProps["onBlur"];

  onKeyPress?: InputBaseProps["onKeyPress"];
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
  disabled?: boolean;
  margin?: "dense" | "none" | "normal";
  endAdornment?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  // Separating props for a mix of usages, with defaults for sx.
  const {
    startAdornment,
    endAdornment,
    helperText,
    dataTestId,
    sx,
    variant,
    fullWidth,
    disabled,
    size = "small",
    margin = "none",
    ...rest
  } = props;
  const localSx = { ...{ width: "100%", height: "54px" }, ...sx };
  return (
    <TextField
      disabled={disabled}
      helperText={helperText}
      InputProps={{
        startAdornment,
        endAdornment: endAdornment,
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
      margin={margin}
      size={size}
    />
  );
};

export default TextInput;
