import { CheckoutSummary } from '../CheckoutSummary/CheckoutSummary';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box } from '@material-ui/core';
import { CheckoutHeader } from '../CheckoutHeader/CheckoutHeader';
import {
  CheckoutSteps,
  CheckoutStepsProps,
} from '../CheckoutSteps/CheckoutSteps';
import React from 'react';
import { useBoundingRect } from '@atlascode/coffee-frontend-react-hooks';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {
  children?: React.ReactNode;
  StepsProps?: CheckoutStepsProps;
}

export function CheckoutLayout({
  StepsProps = {
    steps: [],
  },
  children,
}: CheckoutLayoutProps) {
  const { height, ref, width } = useBoundingRect();

  const styles = React.useMemo(() => stylesheet(height), [height]);

  return (
    <Box sx={styles.root}>
      <Box ref={ref}>
        <CheckoutHeader />
      </Box>
      <Box sx={styles.layoutGrid}>
        <CheckoutSteps {...StepsProps} sx={styles.steps} />
        <Box></Box>
        <Box></Box>
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

    steps: {
      py: { xs: '3em' },
    },
    layoutGrid: {
      display: 'grid',
      height: '100%',
      minHeight: `calc(100vh - ${headerHeight}px)`,
      overflow: 'hidden',
      width: '100%',
      gridTemplateRows: {
        xs: '14.2% 62.3% 23.5%',
      },
      gridTemplateColumns: '1fr',
    },
  });
