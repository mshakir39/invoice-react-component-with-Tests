import { SnackbarOrigin, VariantType } from "notistack";

export const errorOptions: {
  variant: VariantType;
  anchorOrigin: SnackbarOrigin;
} = {
  variant: "error",
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};
export const successOptions: {
  variant: VariantType;
  anchorOrigin: SnackbarOrigin;
} = {
  variant: "success",
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};
