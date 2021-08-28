import React from "react";
import Base from "./Base";
import { Outlet } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Board from "./Board";
import AccountCardModal from "../../components/AccountCard/AccountCardModal";

export interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [accountDialog, setAccountDialog] = React.useState<boolean>(false);

  const handleAccountDialogOpen = () => {
    setAccountDialog(true);
  };

  const handleAccountDialogClose = () => {
    setAccountDialog(false);
  };

  return (
    <Base>
      <Grid sx={{ height: "100%", width: "100%" }} container spacing={0}>
        <Grid sx={{ display: { xs: "none", md: "initial" } }} xs={2} item>
          <Sidebar />
        </Grid>

        <Grid xs={12} md={10} container direction="column" item>
          <Grid xs={1.5 as any} sx={{ mr: { xs: 0, md: 5 } }} item>
            <Header
              UserIconButtonProps={{ onClick: handleAccountDialogOpen }}
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ p: { xs: 1.5, md: 4 }, pr: { md: 5 }, pl: { md: 0 } }}
            xs={10.5 as any}
            item
          >
            <Board>
              <Outlet />
            </Board>
          </Grid>
        </Grid>
      </Grid>
      <AccountCardModal
        handleClose={handleAccountDialogClose}
        open={accountDialog}
      />
    </Base>
  );
};

export default DashboardLayout;
