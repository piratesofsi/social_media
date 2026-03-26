import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={(theme) => ({
        height: height,
        width: width,
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        border: `2px solid ${theme.palette.background.paper}`,
        boxShadow: "0 8px 16px rgba(31, 122, 116, 0.2)",
      })}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;
