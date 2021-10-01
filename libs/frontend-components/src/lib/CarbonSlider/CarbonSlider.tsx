import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import {
  SwiperGenericWrapper,
  SwiperGenericWrapperProps,
} from '@atlascode/coffee-frontend-utility';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { BoxProps, Box } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import React from 'react';
/* eslint-disable-next-line */
export interface CarbonSliderProps<C> extends BoxProps {
  component: SwiperGenericWrapperProps<C>['component'];
  list: C[];
  SwiperProps?: SwiperGenericWrapperProps<C>['SwiperProps'];
  uniqueID: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function CarbonSlider<T extends {}>({
  sx,
  children,
  component,
  list,
  SwiperProps,
  uniqueID,
  ...rest
}: CarbonSliderProps<T>) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box id="carbon-slider-container" sx={styles.container}>
        <SwiperGenericWrapper
          list={list}
          component={component}
          SwiperProps={{
            containerModifierClass: uniqueID,
            navigation: {
              nextEl: `#${uniqueID}-next`,
              prevEl: `#${uniqueID}-prev`,
            },
            ...SwiperProps,
          }}
        />
      </Box>

      <CircleIconButton
        elevation={3}
        id={`${uniqueID}-prev`}
        icon={ChevronLeft}
        sx={{ ...styles.backwardsButton, ...styles.button }}
        size="small"
        color="primary"
      ></CircleIconButton>

      <CircleIconButton
        elevation={3}
        id={`${uniqueID}-next`}
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
    width: { xs: '33em', lg: '108.31em' },
    height: { xs: '55em', lg: '55.2em' },
    position: 'relative',
  },

  container: {
    height: '100%',
    width: '100%',
    '.swiper-container': {
      height: '100%',
    },
  },

  button: {
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 5,
    display: { xs: 'none', lg: 'flex' },
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
