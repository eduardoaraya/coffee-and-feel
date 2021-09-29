import { CircleIconButton } from '@atlascode/coffee-front-components';
import {
  SwiperGenericWrapper,
  SwiperGenericWrapperProps,
} from '@atlascode/coffee-frontend-utility';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { BoxProps, Box } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
/* eslint-disable-next-line */
export interface CarbonSliderProps<C> extends BoxProps {
  component: SwiperGenericWrapperProps<C>['component'];
  list: C[];
  SwiperProps?: SwiperGenericWrapperProps<C>['SwiperProps'];
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function CarbonSlider<T extends {}>({
  sx,
  children,
  component,
  list,
  SwiperProps,
  ...rest
}: CarbonSliderProps<T>) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box id="carbon-slider-container" sx={styles.container}>
        <SwiperGenericWrapper
          list={list}
          component={component}
          SwiperProps={{
            navigation: { nextEl: '#next-go', prevEl: '#prev-go' },
            ...SwiperProps,
          }}
        />
      </Box>

      <CircleIconButton
        elevation={3}
        id="prev-go"
        icon={ChevronLeft}
        sx={{ ...styles.backwardsButton, ...styles.button }}
        size="small"
        color="primary"
      ></CircleIconButton>

      <CircleIconButton
        elevation={3}
        id="next-go"
        icon={ChevronRight}
        sx={{ ...styles.forwardButton, ...styles.button }}
        size="small"
        color="primary"
      ></CircleIconButton>
    </Box>
  );
}

export default CarbonSlider;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    borderRadius: '22px',
    bgcolor: '#323232',
    boxShadow: (theme) => theme.shadows[2],
    width: { xs: '30em', lg: '100.3em' },
    height: { xs: 'auto', lg: '55.2em' },
    minHeight: { xs: '55em' },
    position: 'relative',
  },

  container: {
    height: '100%',
    width: '100%',
  },

  button: {
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 5,
  },

  forwardButton: {
    position: 'absolute',
    right: { xs: '-6%', lg: '-1.75%' },
  },
  backwardsButton: {
    position: 'absolute',
    left: { xs: '-6%', lg: '-1.75%' },
  },
});
