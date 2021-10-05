import {
  CheckoutSummary,
  CheckoutSummaryProps,
} from '../CheckoutSummary/CheckoutSummarySecondaryDesktop/CheckoutSummarySecondaryDesktop';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box } from '@material-ui/core';
import { CheckoutHeader } from './CheckoutHeader/CheckoutHeader';
import {
  CheckoutSteps,
  CheckoutStepsProps,
} from './CheckoutSteps/CheckoutSteps';
import React from 'react';
import { useBoundingRect } from '@atlascode/coffee-frontend-react-hooks';
import {
  CheckoutMenu,
  CheckoutMenuProps,
} from '../CheckoutSummary/CheckoutSummarySecondaryMobile/CheckoutSummarySecondaryMobile';
import { CheckoutItemProps } from '../CheckoutSummary/CheckoutSummaryItem/CheckoutSummaryItem';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {
  children?: React.ReactNode;
  items?: CheckoutItemProps[];
  open?: CheckoutMenuProps['open'];
  onClose?: CheckoutMenuProps['onClose'];
  activeStep?: number;
  steps?: CheckoutStepsProps['steps'];
}

export function CheckoutLayout({
  items = [],
  children,
  activeStep = 0,
  steps = [],
  open,
}: CheckoutLayoutProps) {
  const { height, ref, width } = useBoundingRect();

  const styles = React.useMemo(() => stylesheet(height), [height]);

  return (
    <Box sx={styles.root}>
      <CheckoutMenu open={open} items={items} />

      <Box ref={ref}>
        <CheckoutHeader />
      </Box>
      <Box sx={styles.grid}>
        <Box sx={styles.stepsWrapper}>
          <Box sx={styles.stepsContainer}>
            <CheckoutSteps
              steps={steps}
              activeStep={activeStep}
              sx={styles.steps}
            />
          </Box>
        </Box>

        <Box sx={styles.innerGrid}>
          <Box>{children}</Box>
          <CheckoutSummary items={items} sx={styles.summaryDesktop} />
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutLayout;

const stylesheet = (headerHeight = 0) =>
  AtlasStylesheet.create({
    root: {
      height: 'auto',
    },

    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10,
    },

    summaryDesktop: {
      justifySelf: 'center',
      display: { xs: 'none', lg: 'block' },
      visibility: { xs: 'hidden', lg: 'visible' },
    },

    stepsWrapper: {},

    stepsContainer: {
      display: 'flex',
      justifyContent: 'center',
    },

    steps: {
      py: { xs: '3em' },
      width: { xs: '33em' },
    },

    innerGrid: {
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', lg: 'calc(100% - 35%) 35%' },
    },

    grid: {
      display: 'grid',
      height: '100%',
      minHeight: `calc(100vh - ${headerHeight}px)`,
      overflow: 'hidden',
      width: '100%',
      gridTemplateRows: {
        xs: '0.142fr 1fr',
      },
      gridTemplateColumns: '1fr',
    },
  });
