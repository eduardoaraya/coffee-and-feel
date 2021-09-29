import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import TabPanel from './TabPanel';
import { SubscriptionPageBenefitCard } from '@atlascode/coffee-front-components';
import {
  CoffeeBagSVG,
  DeliveryTimeSVG,
  DiscountSVG,
} from '@atlascode/coffee-frontend-svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SubscriptionBenefitsDesktopProps extends BoxProps {
  activeIndex: 0 | 1;
}

const SubscriptionBenefitsDesktop = ({
  sx,
  activeIndex,
  ...rest
}: SubscriptionBenefitsDesktopProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.paper}>
        <TabPanel sx={styles.paperInner} value={activeIndex} index={0}>
          <SubscriptionPageBenefitCard
            caption={'60 capsulas de cafés selecionados'}
            icon={CoffeeBagSVG}
          />

          <SubscriptionPageBenefitCard
            caption={'10% OFF em toda loja'}
            icon={DiscountSVG}
          />

          <SubscriptionPageBenefitCard
            caption={'100% OFF no frete'}
            icon={DeliveryTimeSVG}
          />
        </TabPanel>
        <TabPanel sx={styles.paperInner} value={activeIndex} index={1}>
          <SubscriptionPageBenefitCard
            caption={'50% OFF no frete'}
            icon={DeliveryTimeSVG}
          />
          <SubscriptionPageBenefitCard
            caption={'40 capsulas de cafés selecionados'}
            icon={CoffeeBagSVG}
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default SubscriptionBenefitsDesktop;

const styles = AtlasStylesheet.create({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },

  paperInner: {
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },

  paper: {
    width: { xs: '88em' },
    height: { xs: '35.5em' },
    bgcolor: '#fff',
    borderRadius: { xs: '22px' },
    boxShadow: (theme) => theme.shadows[3],
    position: 'relative',
  },
});
