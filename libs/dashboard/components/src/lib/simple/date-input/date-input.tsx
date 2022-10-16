import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

export interface StandardDateInputProps {
  label: string;
  required?: boolean;
  sx?: object;
  dataTestId: string;
  type?: string;
  value: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  variant?: string;
  size?: "medium" | "small" | undefined;
  onChange: (newValue: Dayjs | null) => void;
  disablePast?: boolean;
  minDate?: Dayjs;
}

export const DateInput: React.FC<StandardDateInputProps> = (
  props: StandardDateInputProps
) => {
  // Splitting props into ones for Autocomplete and TextField.
  const { error, dataTestId, minDate, helperText, ...outer } = props;

  // Splitting TextField props into sx, with defaults, and all others.
  let { sx: textFieldSx } = outer;
  const { ...inner } = outer;
  textFieldSx = { ...{ width: "100%", height: "54px" }, ...textFieldSx };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...outer}
        minDate={minDate}
        renderInput={(params) => (
          <TextField
            margin="normal"
            {...params}
            {...inner}
            error={error}
            helperText={helperText}
            variant="standard"
            sx={(theme) => ({
              label: {
                color: theme.palette.text.primary,
              },
              ...textFieldSx,
            })}
            data-testid={`${dataTestId}-inner-text-field`}
            onChange={undefined}
          />
        )}
        data-testid={dataTestId}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
