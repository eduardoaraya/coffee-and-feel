import React from "react";
import { Box, IconButton, Tooltip, IconButtonProps } from "@material-ui/core";
import { Notifications, Help, Person } from "@material-ui/icons";
import { alpha } from "@material-ui/system";

export interface HeaderProps {
  NotificationIconButtonProps?: IconButtonCustomProps;
  InformationIconButtonProps?: IconButtonCustomProps;
  UserIconButtonProps?: IconButtonCustomProps;
}

const Header = ({
  InformationIconButtonProps,
  NotificationIconButtonProps,
  UserIconButtonProps,
}: HeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderBottom: (theme) =>
          `1px solid ${alpha(theme.palette.secondary.light, 0.45)}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: { xs: 1 },
      }}
    >
      <IconButtonCustom tooltip="Notificações" {...NotificationIconButtonProps}>
        <Notifications />
      </IconButtonCustom>

      <IconButtonCustom tooltip="Informações" {...InformationIconButtonProps}>
        <Help />
      </IconButtonCustom>

      <IconButtonCustom tooltip="Minha conta" {...UserIconButtonProps}>
        <Person />
      </IconButtonCustom>
    </Box>
  );
};

export default Header;

export interface IconButtonCustomProps extends IconButtonProps {
  tooltip?: string;
}

const IconButtonCustom = ({
  children,
  tooltip = "",
  ...rest
}: IconButtonCustomProps) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton
        sx={{
          height: "fit-content",
          fill: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.secondary.main,
          ".MuiSvgIcon-root": {
            fontSize: "1.4rem",
          },
        }}
        {...rest}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};
