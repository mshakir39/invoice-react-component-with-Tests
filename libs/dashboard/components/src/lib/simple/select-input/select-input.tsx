import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { AutocompleteChangeDetails } from "@mui/material";
import Typography from "@mui/material/Typography";

/* eslint-disable-next-line */
export interface StandardAutocompleteProps {
  label: string;
  options: ({ label: string } | string)[];
  required?: boolean;
  sx?: object;
  dataTestId: string;
  error?: boolean;
  value?: string;
  name?: string;
  helperText?: string;
  loading?: boolean;
  onChange?: <T>(
    event: React.SyntheticEvent,
    value: T | Array<T>,
    reason: string,
    details?: AutocompleteChangeDetails<{ label: string } | string>
  ) => void;
}

export function SelectInput(props: StandardAutocompleteProps) {
  // Splitting props into ones for Autocomplete and TextField.
  const { error, dataTestId, helperText, loading, ...outer } = props;

  // Splitting TextField props into sx, with defaults, and all others.
  let { sx: textFieldSx } = outer;
  const { ...inner } = outer;
  textFieldSx = { ...{ width: "100%", height: "54px" }, ...textFieldSx };

  return (
    <Autocomplete
      {...outer}
      loading={loading ? loading : undefined}
      noOptionsText={
        <Typography
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          No Options
        </Typography>
      }
      renderInput={(params) => (
        <TextField
          {...params}
          {...inner}
          error={error}
          helperText={helperText}
          variant="standard"
          onChange={undefined}
          sx={(theme) => ({
            label: {
              color: theme.palette.text.primary,
            },
            ...textFieldSx,
          })}
          data-testid={`${dataTestId}-inner-text-field`}
          margin="normal"
        />
      )}
      data-testid={dataTestId}
    />
  );
}

export default SelectInput;
