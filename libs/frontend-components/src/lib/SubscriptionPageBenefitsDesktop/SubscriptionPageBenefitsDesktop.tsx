import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  SubscriptionPageBenefitCard,
  SubscriptionPageBenefitCardProps,
} from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SubscriptionPageBenefitsDesktopProps extends BoxProps {
  items?: SubscriptionPageBenefitCardProps[];
}

export const SubscriptionPageBenefitsDesktop = ({
  sx,
  items = [],
  ...rest
}: SubscriptionPageBenefitsDesktopProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.paper}>
        <Box sx={styles.paperInner}>
          {items.map((props, index) => {
            return (
              <SubscriptionPageBenefitCard
                caption={props.caption}
                icon={props.icon}
                key={index}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionPageBenefitsDesktop;

const styles = AtlasStylesheet.create({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    fontSize: '10px',
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
