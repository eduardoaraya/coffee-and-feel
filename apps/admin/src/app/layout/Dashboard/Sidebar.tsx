import React from "react";
import { Box, Grid, Avatar } from "@material-ui/core";
import Logo from "./Logo";
import { BRANDING_CONFIG } from "../../config/branding.config";

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid
        sx={{ width: "100%", height: "100%" }}
        container
        flexDirection="column"
      >
        <Grid
          sx={{ maxWidth: "100%" }}
          justifyContent="flex-start"
          alignItems="flex-end"
          container
          item
          xs={1.5 as any}
          px={3}
          gap={2.5}
          mt={1}
        >
          <Logo />
          <Box
            sx={{
              m: 0,
              p: 0,
              fontSize: { xs: "19px" },
              textTransform: "uppercase",
              fontWeight: 900,
              color: (theme) => theme.palette.secondary.main,
            }}
            component="h2"
          >
            {BRANDING_CONFIG.companyName}
          </Box>
        </Grid>

        <Grid sx={{ maxWidth: "100%" }} item xs={10.5 as any}></Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;
