import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { IButton } from "../../../constants/interfaces";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
  },
});

export default function MyButton({ label, variant, color, onClick }: IButton) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
