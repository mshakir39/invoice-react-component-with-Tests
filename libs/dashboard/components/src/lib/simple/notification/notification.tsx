import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

/* eslint-disable-next-line */
export interface NotificationProps {}

export function Notification(props: NotificationProps) {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={0} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default Notification;
