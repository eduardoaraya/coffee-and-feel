import {
  Box,
  BoxProps,
  Typography,
  Button,
  ButtonProps,
} from '@material-ui/core';
import { LottieAnimation } from '@atlascode/coffee-frontend-utility';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import data from './data.json';

/* eslint-disable-next-line */
export interface CheckoutQuickviewEmptyContentProps extends BoxProps {
  PrimaryButtonProps?: ButtonProps;
  SecondaryButtonProps?: ButtonProps;
}

export function CheckoutQuickviewEmptyContent({
  sx,
  PrimaryButtonProps,
  SecondaryButtonProps,
  ...rest
}: CheckoutQuickviewEmptyContentProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.circle}>
        <LottieAnimation sx={styles.lottie} animationData={data} />
      </Box>

      <Typography sx={styles.caption}>
        Você ainda não colocou itens na sua sacola.
      </Typography>

      <Box sx={styles.actionContainer}>
        <Button
          {...PrimaryButtonProps}
          size="small"
          sx={styles.button}
          color="primary"
          variant="contained"
        >
          Conhecer o clube
        </Button>

        <Button
          {...SecondaryButtonProps}
          size="small"
          variant="text"
          sx={styles.textButton}
        >
          Ir para a loja
        </Button>
      </Box>
    </Box>
  );
}

export default CheckoutQuickviewEmptyContent;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: { xs: '2em' },
  },

  circle: {
    width: { xs: '11.6em' },
    height: { xs: '11.6em' },
    backgroundColor: (theme) => theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '50%',
  },

  caption: {
    color: (theme) => theme.palette.secondary.main,
    fontSize: { xs: '1.6em' },
    maxWidth: { xs: '22ch' },
  },

  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  button: {},

  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: '1em' },
  },

  textButton: {
    borderRadius: '6px',
  },
});
