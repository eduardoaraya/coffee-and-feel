/* eslint-disable @typescript-eslint/no-empty-interface */
import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Swiper } from 'swiper/react';
import { SwiperGenericWrapper } from '@atlascode/coffee-frontend-utility';
import {
  SubscriptionPageBenefitCard,
  SubscriptionPageBenefitCardProps,
} from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SubscriptionPageBenefitsMobileProps extends BoxProps {
  SwiperProps?: Swiper;
  items?: SubscriptionPageBenefitCardProps[];
}

export const SubscriptionPageBenefitsMobile = ({
  sx,
  SwiperProps,
  items = [],
  ...rest
}: SubscriptionPageBenefitsMobileProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <SwiperGenericWrapper
        SwiperProps={{
          slidesPerView: 1.5,
          centeredSlides: true,
          initialSlide: 0,
        }}
        sx={styles.slider}
        component={SubscriptionPageBenefitCard}
        list={items}
      />
    </Box>
  );
};

export default SubscriptionPageBenefitsMobile;

const styles = AtlasStylesheet.create({
  root: {},
  slider: {
    p: { xs: '2em 1em' },

    '.swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});
