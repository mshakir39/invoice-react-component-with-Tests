import * as React from "react";
import Button from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

interface ButtonProps {
  text?: string;
  type?: "submit" | "reset" | "button";
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
}

function AcceptButton({
  type = "submit",
  text = "Default",
  color_ = "primary",
  onClick,
  variant = "contained",
  fullWidth = true,
  disabled = false,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      data-testid="accept-btn"
      fullWidth={fullWidth}
      color={color_}
      variant={variant}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default AcceptButton;
