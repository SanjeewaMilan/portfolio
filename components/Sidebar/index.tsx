import * as React from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import { Height } from "@mui/icons-material";
import SidebarListItem from "./SidebarListItem";
export default function Sidebar() {
  return (
    <Stack spacing={2}>
      <Link href="/">Home</Link>
      <Link href="/about">
        <SidebarListItem title="About" />
      </Link>
    </Stack>
  );
}
