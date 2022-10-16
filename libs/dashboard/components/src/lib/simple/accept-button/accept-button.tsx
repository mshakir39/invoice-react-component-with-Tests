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
}

function AcceptButton({
  type = "submit",
  text = "Default",
  color_ = "primary",
  onClick,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      data-testid="accept-btn"
      fullWidth={true}
      color={color_}
      variant={"contained"}
    >
      {text}
    </Button>
  );
}

export default AcceptButton;
