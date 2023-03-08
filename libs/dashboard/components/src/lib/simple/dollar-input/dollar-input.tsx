import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { InputBaseProps } from "@mui/material/InputBase";
import { InputAttributes, NumericFormat } from "react-number-format";
import { InputBaseComponentProps } from "@mui/material/InputBase/InputBase";

/* eslint-disable-next-line */
export interface StandardDollarInputProps {
  label?: string;
  id?: string;
  required?: boolean;
  sx?: object;
  inputProps?: object;
  dataTestId?: string;
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
  onChange: (event: {
    target: { name: string; value: string; id: string };
  }) => void;
  name: string;
  id: string;
  value: string;
}

const NumberFormatCustom = React.forwardRef<
  typeof NumericFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, value, ...other } = props;

  return (
    <NumericFormat
      {...other}
      value={value}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
            id: props.id,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
});

//i have refactored this Components to get some Props
//i am unable to get the Prefix prop in NumericFormat Component

export const DollarInput: React.FC<StandardDollarInputProps> = (props) => {
  // Separating props for a mix of usages, with defaults for sx.
  const {
    helperText,
    dataTestId,
    sx,
    variant,
    fullWidth,
    value,
    id,
    inputProps,
    ...rest
  } = props;
  const localSx = { ...{ width: "100%", height: "54px" }, ...sx };

  return (
    <TextField
      id={id}
      helperText={helperText}
      value={Number(value)}
      InputProps={{
        ...{
          inputComponent:
            NumberFormatCustom as unknown as React.ElementType<InputBaseComponentProps>,
        },
        ...inputProps,
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
