import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useRouter } from "next/router";

/* eslint-disable-next-line */
export interface ListItemProps {
  href: string;
  listItemText: string;
  parent: string;
  open: boolean;
}

export function ListItem(props: ListItemProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(props.href);
  };
  let path = router ? router.asPath : "";
  if (path === "/") {
    path = "/projects/all";
  }

  return (
    <div hidden={!path.includes(props.parent) || !props.open}>
      <ListItemButton onClick={handleClick} selected={path === props.href}>
        <ListItemText
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            marginLeft: "30px",
          })}
          primary={props.listItemText}
        />
      </ListItemButton>
    </div>
  );
}

export default ListItem;
