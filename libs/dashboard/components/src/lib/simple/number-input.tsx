import React from "react";

import TextField from "@mui/material/TextField";
import { InputBaseProps } from "@mui/material/InputBase";
import FormControlLabel from "@mui/material/FormControlLabel";

/* eslint-disable-next-line */
export interface NumberInputProps {
  initial: number;
  whenBlurred: (current: number) => void;
  step?: number;
  min?: number;
  max?: number;
  whenChanged?: (current: number) => void;
  label?: string;
  charsWide?: number;
  sx?: InputBaseProps["sx"];
  labelSx?: InputBaseProps["sx"];
  dataTestId?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  initial,
  step,
  min,
  max,
  label,
  sx = {},
  labelSx = {},
  whenBlurred,
  dataTestId,
  ...props
}) => {
  /* This is an uncontrolled component, since full React statefulness is not needed. */

  // region Complex property destructuring

  const whenChanged =
    props.whenChanged ||
    (() => {
      return;
    });
  const charWidth = (props.charsWide || 3) + 2;

  // endregion Complex property destructuring

  // region Markup

  return (
    <FormControlLabel
      labelPlacement="end"
      control={
        <TextField
          type="number"
          defaultValue={initial}
          sx={{
            "& .MuiInputBase-root": { height: "40px" },
            width: `${charWidth * 20}px`,
            marginRight: label ? "4px" : undefined,
            ...sx,
          }}
          inputProps={{ min, max, step, "data-testid": dataTestId }}
          onChange={(event) => {
            whenChanged(Number(event.target.value));
          }}
          onBlur={(event) => {
            whenBlurred(Number(event.target.value));
          }}
        />
      }
      label={label}
      sx={{ marginRight: label ? "32px" : undefined, ...labelSx }}
    />
  );

  // endregion Markup
};

export default NumberInput;
