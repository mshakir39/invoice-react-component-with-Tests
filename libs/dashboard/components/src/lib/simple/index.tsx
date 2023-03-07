import { FC } from "react";
import * as React from "react";
import { TextField } from "@mui/material";

function InputAdornments() {
  return (
    <TextField
      type="email"
      fullWidth={true}
      label="Email"
      id="outlined-start-adornment"
    />
  );
}

interface InputProps {
  text?: string;
}

const EmailInput: FC<InputProps> = () => {
  return InputAdornments();
};

export default EmailInput;
