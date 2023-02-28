import Box from "@mui/material/Box";
import * as React from "react";
import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface Props {
  children: ReactNode;
  open: boolean;
}

export const Body: React.FC<Props> = ({ children, open }) => {
  return (
    <Box
      id={"cupola-container"}
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        height: "calc(100vh - 64px)",
        width: "100%",
        overflow: "auto",
        display: "flex",
      }}
    >
      <Box
        id={"cupola-content"}
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "flexStart",
          padding: "18px",
          position: "absolute",
          height: "calc(100vh - 64px)",
          width: "100%",
          overflowX: "hidden",
          ...(open && {
            transition: theme.transitions.create("left", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }),
          borderRadius: "8px",
        })}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Body;
