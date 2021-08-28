import React from "react";
import { Modal, Backdrop, Fade, Box } from "@material-ui/core";
import { AccountCard, AccountCardProps } from "./AccoutCard";

export interface AccountCardModal {
  open?: boolean;
  handleClose?: (...args: unknown[]) => void;
  AccountCardProps?: AccountCardProps;
}

const AccountCardModal = ({
  open = false,
  handleClose,
  AccountCardProps,
}: AccountCardModal) => {
  return (
    <Modal
      open={open}
      BackdropComponent={Backdrop}
      onBackdropClick={handleClose}
      BackdropProps={{ timeout: 500 }}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <AccountCard {...AccountCardProps} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default AccountCardModal;
