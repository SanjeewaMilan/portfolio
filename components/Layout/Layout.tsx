import * as React from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Sidebar from "../Sidebar";

interface propsTypes {
  children: React.ReactNode;
}
const Layout: React.FC<propsTypes> = (props) => {
  return (
    <Grid2 container>
      {/* sidebar */}
      <Grid2 xs={2} style={{ backgroundColor: "blue", height: "100vh" }}>
        <Sidebar />
      </Grid2>
      <Grid2 xs={10}>{props.children}</Grid2>
    </Grid2>
  );
};
export default Layout;
