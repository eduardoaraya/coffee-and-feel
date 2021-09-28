/* eslint-disable @typescript-eslint/no-empty-interface */
import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Swiper } from 'swiper/react';
import {
  SwiperGenericWrapperProps,
  SwiperGenericWrapper,
} from '@atlascode/coffee-frontend-utility';
import { SubscriptionPageBenefitCard } from '@atlascode/coffee-front-components';
import {
  CoffeeBagSVG,
  DeliveryTimeSVG,
  DiscountSVG,
} from '@atlascode/coffee-frontend-svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SubscriptionBenefitsMobileProps extends BoxProps {
  SwiperProps?: Swiper;
}

export const SubscriptionBenefitsMobile = ({
  sx,
  SwiperProps,
  ...rest
}: SubscriptionBenefitsMobileProps) => {
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
        list={[
          { caption: '60 capsulas de cafés selecionados', icon: CoffeeBagSVG },
          { caption: '10% OFF em toda loja', icon: DiscountSVG },
          { caption: '100% OFF no frete', icon: DeliveryTimeSVG },
        ]}
      />
    </Box>
  );
};

export default SubscriptionBenefitsMobile;

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

const defaultSwiperProps: SubscriptionBenefitsMobileProps['SwiperProps'] = {
  slidesPerView: 1.5,
  loop: false,
};
