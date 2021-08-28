import React from "react";
import {
  TextField,
  BaseTextFieldProps,
  InputAdornment,
} from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";

export interface UsernameInputProps extends BaseTextFieldProps {}

const UsernameInput = ({ ...rest }: UsernameInputProps) => {
  return (
    <TextField
      fullWidth
      sx={{ fontSize: "inherit" }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            sx={{
              ".MuiSvgIcon-root": {
                fontSize: "1.2rem",
              },
            }}
            position="start"
          >
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      size="small"
      label="Email"
      variant={"standard"}
      {...rest}
    />
  );
};

export default UsernameInput;
