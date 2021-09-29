import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { AnimatePresence } from 'framer-motion';
import _ from 'lodash';
import React from 'react';

type Handler = (...args: unknown[]) => void;

/* eslint-disable-next-line */
export interface CustomDialogProps extends MotionBoxProps {
  open?: boolean;
  onOpen?: Handler;
  onClose?: Handler;
  handleClose?: Handler;
}

export function CustomDialog({
  sx,
  onOpen,
  onClose,
  handleClose,
  open,
  children,
  ...rest
}: CustomDialogProps) {
  React.useEffect(() => {
    if (open && onOpen) {
      onOpen();
    }

    return () => {
      if (onClose) {
        onClose();
      }
    };
  }, [open, onClose, onOpen]);

  return (
    <AnimatePresence>
      {open && (
        <MotionBox sx={styles.root}>
          <MotionBox
            onClick={handleClose}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            sx={styles.backdrop}
          >
            <MotionBox
              onClick={(event) => {
                event.stopPropagation();
                console.log('clicked');
                rest.onClick ? rest.onClick(event) : _.noop();
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { y: 500 },
                visible: { y: 0 },
              }}
              sx={{ ...styles.content, ...sx }}
              {...rest}
            >
              {children}
            </MotionBox>
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}

export default CustomDialog;

const styles = AtlasStylesheet.create({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    zIndex: 2000,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // Firefox does not supports backdrop filter, so we change the background to the standard greyish backdrop color
    '@supports (-moz-appearance:none)': {
      background: 'rgba(0, 0, 0, 0.65)',
    },
  },

  content: {
    width: { xs: '90%', lg: '623px' },
    bgcolor: '#fff',
    height: { xs: 'auto', lg: '450px' },
    minHeight: { xs: '50%', sm: 'unset' },
    boxShadow: (theme) => theme.shadows[4],
    borderRadius: '20px',
  },
});
