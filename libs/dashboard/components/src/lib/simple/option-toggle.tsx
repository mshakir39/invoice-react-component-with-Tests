import React, { useState, useCallback } from "react";

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

/* eslint-disable-next-line */
export interface CupolaSwitchProps {
  onChangeCallback?: (isOn: boolean) => void;
  initiallyOn?: boolean;
  isOnOffStyle?: boolean;
  offLabel?: string;
  onLabel?: string;
  size?: "medium" | "small";
  sx?: object;
}

export const OptionToggle: React.FC<CupolaSwitchProps> = ({
  onChangeCallback = (isOn: boolean) => {
    return;
  },
  initiallyOn = false,
  isOnOffStyle = true,
  offLabel = "",
  onLabel = "",
  size = "medium",
  sx = {},
}) => {
  // region State

  const [isOn, setIsOn] = useState(initiallyOn);

  // endregion State

  // region Internal functions

  const whenChangedCallback = useCallback(
    (isOn: boolean) => {
      setIsOn(isOn);
      onChangeCallback(isOn);
    },
    [setIsOn, onChangeCallback]
  );

  // endregion Internal functions

  // region Markup

  return (
    <FormGroup data-testid="cupola-switch-form-group">
      <FormControlLabel
        label={offLabel}
        labelPlacement="start"
        sx={{ marginLeft: offLabel === "" ? "8px" : "0px", ...sx }}
        control={
          <FormControlLabel
            control={
              <Switch
                color={isOnOffStyle ? "primary" : "secondary"}
                data-testid="cupola-switch-inner-switch"
                sx={{
                  "& .MuiSwitch-thumb": {
                    color: isOnOffStyle ? "primary" : "white",
                  },
                  ...sx,
                }}
                checked={isOn}
                size={size}
                onChange={(event) => whenChangedCallback(event.target.checked)}
              />
            }
            label={onLabel}
            labelPlacement="end"
            sx={{ marginLeft: offLabel !== "" ? "2px" : "0px", ...sx }}
          />
        }
      />
    </FormGroup>
  );

  // endregion Markup
};

export default OptionToggle;
