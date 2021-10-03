import {
  CounterInput,
  CounterInputProps,
} from '../../CounterInput/CounterInput';
import { Box, BoxProps, Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import {
  AtlasStylesheet,
  formatToCurrency,
} from '@atlascode/coffee-shared-helpers';
import { alpha } from '@material-ui/system';
import { webkitVerticalTruncate } from '@atlascode/coffee-frontend-mixins';

/* eslint-disable-next-line */
export interface CheckoutItemProps extends BoxProps {
  title: string;
  price: number;
  CounterInputProps?: CounterInputProps;
  img: {
    src: string;
    alt?: string;
  };
}

export function CheckoutItem({
  sx,
  img,
  title,
  price,
  ...rest
}: CheckoutItemProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.grid}>
          <Box sx={styles.photoContainer}>
            <Box sx={styles.photo(img.src)} component="div" title="alt text" />
          </Box>

          <Box sx={styles.infoContainer}>
            <Typography sx={styles.title}>{title}</Typography>

            <Box sx={styles.counterContainer}>
              <CounterInput sx={{ fontSize: 'inherit' }} />
              <Typography sx={styles.price}>{`${formatToCurrency(
                'pt-BR',
                'BRL',
                price
              )}`}</Typography>
            </Box>
          </Box>

          <Box sx={styles.closeButtonContainer}>
            <IconButton sx={styles.closeButton}>
              <Close fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutItem;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '30em' },
    height: { xs: 'auto' },
    minHeight: { xs: '10em' },
    backgroundColor: '#fff',
    p: { xs: '1.75em 1em' },
    boxShadow: (theme) =>
      `1px 1px 5px ${alpha(theme.palette.primary.main, 0.25)}`,
  },

  container: {
    width: '100%',
    height: '100%',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '35% 57.5% 7.5%' },
    gridTemplateRows: '1fr',
    justifyItems: 'center',
  },

  photoContainer: {
    width: { xs: '8em' },
    height: { xs: '8em' },
    borderRadius: '50%',
    boxShadow: (theme) => theme.shadows[4],
    position: 'relative',
  },

  photo: (src = 'https://via.placeholder.com/1500') => {
    return {
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      backgroundOrigin: 'content-box',
      padding: { xs: '0.75em' },
      zIndex: 2,
      position: 'relative',
    };
  },

  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifySelf: 'center',
    gap: { xs: '1.25em' },
  },

  title: {
    fontSize: { xs: '1em' },
    color: '#323232',
    maxWidth: { xs: '22ch' },
    ...(webkitVerticalTruncate(2) as Record<string, unknown>),
  },

  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '1em' },
  },

  counter: {},

  price: {
    fontWeight: 'bold',
    color: (theme) => theme.palette.primary.main,
    fontSize: { xs: '1.6em' },
  },

  closeButtonContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: { xs: 'flex-start' },
    justifyContent: { xs: 'center' },
  },

  closeButton: {
    fontSize: { xs: '1.75em' },
    padding: { xs: '0.125em' },
  },
});
