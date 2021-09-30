import { CookiesSVG } from '@atlascode/coffee-frontend-svg';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  Button,
  Typography,
  IconButton,
  ButtonProps,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

/* eslint-disable-next-line */
export interface CookiesDialogProps extends BoxProps {
  text?: string;
  PrivacyPolicyButtonProps?: ButtonProps;
  ConfirmationButtonProps?: ButtonProps;
  CloseIconButtonProps?: ButtonProps;
}

export function CookiesDialog({
  sx,
  text,
  PrivacyPolicyButtonProps,
  ConfirmationButtonProps,
  CloseIconButtonProps,
  ...rest
}: CookiesDialogProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <CookiesSVG sx={styles.illustration} />
          <IconButton
            {...CloseIconButtonProps}
            sx={styles.closeButton}
            size="small"
          >
            <Close fontSize="inherit" sx={styles.closeIcon} />
          </IconButton>
        </Box>

        <Box sx={styles.textContainer}>
          <Typography sx={styles.text}>{text}</Typography>
        </Box>

        <Box sx={styles.actionsContainer}>
          <Button
            {...PrivacyPolicyButtonProps}
            variant="text"
            color="secondary"
            sx={styles.privacyLink}
          >
            Política de privacidade
          </Button>
          <Button
            {...ConfirmationButtonProps}
            variant="contained"
            color="primary"
            sx={styles.button}
          >
            Ok!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CookiesDialog;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    bgcolor: '#fff',
    borderRadius: '17px',
    boxShadow: (theme) => theme.shadows[3],
    width: { xs: '25.8em', lg: '38.7em' },
    minHeight: { xs: '25em', lg: '23.6em' },
    position: 'relative',
    p: { xs: '1.5em' },
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: { xs: '2em' },
  },

  closeButton: {},
  closeIcon: {},

  header: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    justifyContent: 'flex-end',
  },

  illustration: {
    position: 'absolute',
    height: { xs: '8em' },
    width: 'auto',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50px)',
  },

  textContainer: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  text: {
    fontSize: { xs: '1.2em', lg: '1.4em' },
    maxWidth: { xs: '23ch', lg: '39ch' },
  },

  actionsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column' },
    alignItems: 'center',
    rowGap: { xs: '1.5em' },
  },

  privacyLink: {
    fontSize: { xs: '1em', lg: '1.4em' },
    color: (theme) => theme.palette.grey[400],
    textTransform: 'inherit',
  },
  button: {
    width: 'fit-content',
  },
});
