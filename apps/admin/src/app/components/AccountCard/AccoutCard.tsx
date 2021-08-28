import React from "react";
import {
  Box,
  Paper,
  Grid,
  Avatar,
  Badge,
  Button,
  ButtonProps,
  BadgeProps,
  AvatarProps,
} from "@material-ui/core";
import { AddPhotoAlternate } from "@material-ui/icons";

export interface AccountCardLabels {
  userNameLabel?: string;
  userEmailLabel?: string;
  userRank?: string;
}

export interface AccountCardProps {
  AccountConfigButtonProps?: ButtonProps;
  LogoutButtonProps?: ButtonProps;
  AccountCardProps?: AccountCardAvatarProps;
  userName?: string;
  userEmail?: string;
  userRank?: string;
  labels?: AccountCardLabels;
  title?: string;
}

const ACCOUNT_CARD_MAX_WIDTH = 300;

export const AccountCard = React.forwardRef<HTMLDivElement, AccountCardProps>(
  (
    {
      AccountCardProps,
      AccountConfigButtonProps,
      LogoutButtonProps,
      userEmail = "placeholder@placeholder.com",
      userName = "Placeholder Username",
      userRank = "Admin",
      labels = {
        userEmailLabel: "E-mail do usuário",
        userNameLabel: "Nome do usuário",
        userRank: "Admin",
      },
      title = "Perfil do usuário",
    },
    ref
  ) => {
    return (
      <Box
        component="div"
        sx={{ width: { xs: `${ACCOUNT_CARD_MAX_WIDTH}px` } }}
        ref={ref}
      >
        <Paper
          sx={{
            width: { xs: `${ACCOUNT_CARD_MAX_WIDTH}px` },
            color: (theme) => theme.palette.secondary.dark,
          }}
          elevation={3}
        >
          <Grid py={3} gap={3} direction="column" container>
            <Grid item container xs={2}>
              <Box
                sx={{
                  borderBottom: "1px grey black",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  component="p"
                  sx={{
                    margin: 0,
                    p: 0,
                    fontSize: { xs: "18px", md: "22px" },
                    fontWeight: 700,
                  }}
                >
                  {title}
                </Box>
              </Box>
            </Grid>
            <Grid direction="column" item container xs={10}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: { xs: "0.875rem" },
                  gap: "1.5rem",
                }}
              >
                <AccountCardAvatar {...AccountCardProps} />

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontWeight: 800 }}>{labels.userNameLabel}</Box>
                  <Box>{userName}</Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontWeight: 800 }}>{labels.userEmailLabel}</Box>
                  <Box>{userEmail}</Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontWeight: 800 }}>{labels.userRank}</Box>
                  <Box>{userRank}</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item container xs={2}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "0.45rem",
                  gap: "0.75rem",
                }}
              >
                <Button
                  sx={{ fontSize: "inherit" }}
                  variant="outlined"
                  {...AccountConfigButtonProps}
                >
                  Configurações
                </Button>
                <Button
                  sx={{ fontSize: "inherit" }}
                  variant="contained"
                  {...LogoutButtonProps}
                >
                  Logout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }
);

export interface AccountCardAvatarProps {
  BadgeProps?: BadgeProps;
  AvatarProps?: AvatarProps;
}

const AccountCardAvatar = ({
  BadgeProps,
  AvatarProps,
}: AccountCardAvatarProps) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      badgeContent={<AccountCardAvatarIcon />}
      {...BadgeProps}
    >
      <Avatar sx={{ height: "60px", width: "60px" }} {...AvatarProps} />
    </Badge>
  );
};

const ICON_SIZE = 18;

export const AccountCardAvatarIcon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${ICON_SIZE + 3}px`,
        height: `${ICON_SIZE + 3}px`,
        borderRadius: "50%",
        bgcolor: "#fff",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${ICON_SIZE}px`,
          height: `${ICON_SIZE}px`,
          bgcolor: "#fff",
          borderRadius: "50%",
          boxShadow: (theme) => theme.shadows[1],

          p: 1,

          ".MuiSvgIcon-root": {
            color: (theme) => theme.palette.secondary.main,
            fontSize: "14px",
          },
        }}
      >
        <AddPhotoAlternate />
      </Box>
    </Box>
  );
};
