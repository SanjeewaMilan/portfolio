import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";

interface propsTypes {
  title: string;
}

const SidebarListItem: React.FC<propsTypes> = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItemButton>
    </ListItem>
  );
};
export default SidebarListItem;
