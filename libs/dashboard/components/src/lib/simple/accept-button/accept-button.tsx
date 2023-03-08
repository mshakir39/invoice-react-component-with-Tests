import * as React from "react";
import Button from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";
import { debounce } from "lodash";

export interface AcceptButtonProps {
  text?: string;
  type?: "submit" | "reset" | "button";
  id?: string;
  color_?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
  >;
  onClick?: () => void;
  variant?: "text" | "contained" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  sx?: object;
}

export const AcceptButton: React.FC<AcceptButtonProps> = ({
  type = "submit",
  text = "Default",
  color_ = "primary",
  onClick,
  variant = "contained",
  fullWidth = true,
  disabled = false,
  dataTestId = "accept-btn",
  id,
  sx = {},
}) => {
  const doNothing = () => {
    return;
  };
  const debouncedCallback = debounce(onClick || doNothing, 400);

  return (
    <Button
      id={id}
      onClick={debouncedCallback}
      type={type}
      data-testid={dataTestId}
      fullWidth={fullWidth}
      color={color_}
      variant={variant}
      disabled={disabled}
      sx={sx}
    >
      {text}
    </Button>
  );
};

export default AcceptButton;
