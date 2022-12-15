import { FC } from "react";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "This is the label" } };

function GenerateCheckbox() {
  return (
    <div>
      <Checkbox data-testid="check-box" {...label} /> I accept the Terms and
      Conditions
    </div>
  );
}

const CheckBox: FC = () => {
  return GenerateCheckbox();
};

export default CheckBox;
