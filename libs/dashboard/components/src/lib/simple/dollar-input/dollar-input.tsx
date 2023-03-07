import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { InputBaseProps } from "@mui/material/InputBase";
import { InputAttributes, NumericFormat } from "react-number-format";
import { InputBaseComponentProps } from "@mui/material/InputBase/InputBase";

/* eslint-disable-next-line */
export interface StandardDollarInputProps {
  label: string;
  required?: boolean;
  sx?: object;
  dataTestId: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: InputBaseProps["onBlur"];
  value?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  variant?: "outlined" | "standard" | "filled" | undefined;
  fullWidth?: boolean;
  autoComplete?: string;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<
  typeof NumericFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
});

export const DollarInput: React.FC<StandardDollarInputProps> = (props) => {
  // Separating props for a mix of usages, with defaults for sx.
  const { helperText, dataTestId, sx, variant, fullWidth, value, ...rest } =
    props;
  const localSx = { ...{ width: "100%", height: "54px" }, ...sx };

  return (
    <TextField
      helperText={helperText}
      InputProps={{
        inputComponent:
          NumberFormatCustom as unknown as React.ElementType<InputBaseComponentProps>,
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
      margin="none"
      size="small"
    />
  );
};
