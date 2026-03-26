import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostContentBox = (props) => {
  const { clickable, post, editing } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {clickable && !editing ? (
        <Box
          sx={{
            padding: theme.spacing(2),
            width: "92%",
            borderRadius: 2,
            transition: "background-color 0.2s ease",
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.06),
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/posts/" + post._id)}
        >
          {props.children}
        </Box>
      ) : (
        <Box sx={{ padding: theme.spacing(2), width: "90%" }}>
          {props.children}
        </Box>
      )}
    </>
  );
};

export default PostContentBox;
