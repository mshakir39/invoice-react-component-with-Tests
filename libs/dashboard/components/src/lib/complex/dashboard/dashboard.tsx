import * as React from "react";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Body from "../body/body";
import { useGlobalAppContext } from "../../complex/context/context";
import HorizontalNavBar from "../horizontal-nav-bar/horizontal-nav-bar";

export interface DashboardProps {
  body: ReactNode;
  selector?: ReactNode;
}

// eslint-disable-next-line react/jsx-no-useless-fragment
export const Dashboard: React.FC<DashboardProps> = ({
  body = <span></span>,
  selector = <span></span>,
}) => {
  const [state] = React.useState(useGlobalAppContext());


  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      id={"cupola-dashboard"}
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignContent: "stretch",
        alignItems: "flex-start",
      }}
    >
      <CssBaseline />
      <Box
        id={"cupola-main"}
        sx={{
          order: 0,
          alignSelf: "auto",
          position: "relative",
          flex: "1 1 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignContent: "stretch",
            alignItems: "flex-start",
          }}
        >
          <HorizontalNavBar
            selector={selector}
            toggleDrawer={toggleDrawer}
            open={open}
          />
          <Body open={open}>{body}</Body>
        </Box>
      </Box>
      <Box
        id={"cupola-menu"}
        sx={(theme) => ({
          order: 0,
          alignSelf: "auto",
          position: "relative",
          flex: "0 1 auto",
          width: open ? 278 : 88,
          zIndex: theme.zIndex.drawer,
        })}
      >
      </Box>
    </Box>
  );
};
