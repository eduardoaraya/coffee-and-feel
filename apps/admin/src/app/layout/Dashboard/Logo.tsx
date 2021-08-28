import React from "react";
import { Box } from "@material-ui/core";
import { BRANDING_CONFIG } from "../../config/branding.config";

export interface LogoProps {
  src?: string;
  alt?: string;
}

const Logo = ({}: LogoProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "50%",
        boxShadow: (theme) => theme.shadows[5],
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        p: 1.2,
      }}
    >
      <Box
        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={BRANDING_CONFIG.logo}
        alt="Logo"
        component="img"
      ></Box>
    </Box>
  );
};

export default Logo;
