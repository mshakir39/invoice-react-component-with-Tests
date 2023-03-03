import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { ReactNode } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

interface HorizontalNavBarProps extends MuiAppBarProps {
  open: boolean;
  toggleDrawer: () => void;
  selector?: ReactNode;
}
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  color: theme.palette.text.primary,
  position: "static",
  marginLeft: "-50px",
  width: "calc(100% + 50px)",
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const HorizontalNavBar: React.FC<HorizontalNavBarProps> = ({
  open,
  selector,
}) => {
  return (
    <AppBar open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            position: "static",
            padding: "0px 8px 0px 50px",
            ...(open && {
              transition: theme.transitions.create("left", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            }),
            borderRadius: "8px",
            top: "12px",
          })}
        >
          {selector}
        </Box>
        <Grid container direction="row-reverse">
          <Grid item>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalNavBar;
