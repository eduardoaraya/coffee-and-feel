import React from "react";
import { Box } from "@material-ui/core";
import { alpha } from "@material-ui/system";
export interface BoardProps {
  children?: React.ReactNode;
}

const Board = (props: BoardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        borderRadius: (theme) => theme.shape.borderRadius,
        boxShadow: (theme) =>
          `0px 4px 6px ${alpha(theme.palette.secondary.main, 0.6)}`,
        padding: { xs: 2, md: 6 },
      }}
    >
      {props.children}
    </Box>
  );
};

export default Board;
