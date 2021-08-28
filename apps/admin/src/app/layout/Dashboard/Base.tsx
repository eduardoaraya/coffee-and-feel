import React from "react";
import { Box } from "@material-ui/core";

interface BaseProps {
  children?: React.ReactNode;
}

const Base = (props: BaseProps) => {
  return (
    <Box
      sx={{
        width: "100vw",
        overflow: "hidden",
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {props.children}
    </Box>
  );
};

export default Base;
