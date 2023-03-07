import React from "react";
import Grid from "@mui/material/Grid";
import NumberInput from "../number-input/number-input";
import { InputBaseProps } from "@mui/material/InputBase";

/* eslint-disable-next-line */
export interface HoursMinutesInputProps {
  whenHoursBlurred: (hours: number) => void;
  whenMinsBlurred: (minutes: number) => void;
  sx?: InputBaseProps["sx"];
}

export const TimeInput: React.FC<HoursMinutesInputProps> = ({
  whenHoursBlurred,
  whenMinsBlurred,
  sx = {},
}) => {
  /* In effect this is an uncontrolled component, since NumberInput
     is uncontrolled and full React statefulness is not needed. */

  return (
    <Grid container>
      <Grid item>
        <NumberInput
          dataTestId="time-input-hours"
          label="Hrs"
          initial={0}
          min={0}
          whenBlurred={(current) => whenHoursBlurred(current)}
          charsWide={2}
          sx={sx}
        />
        <NumberInput
          dataTestId="time-input-mins"
          label="Mins"
          initial={0}
          step={5}
          min={0}
          max={59}
          whenBlurred={(current) => whenMinsBlurred(current)}
          charsWide={2}
          sx={sx}
        />
      </Grid>
    </Grid>
  );
};

export default TimeInput;
