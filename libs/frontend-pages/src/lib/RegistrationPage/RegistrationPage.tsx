import { Box } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';

import RightSideGrid, { RightSideGridProps } from './RightSideGrid';

import LeftSideGrid, { LeftSideGridProps } from './LeftSideGrid';

const leftSideGridDefaultProps: Omit<RegistrationPageProps, 'backgroundImage'> =
  {
    activeIndex: 0,
    ForwardButtonProps: {
      variant: 'contained',
      color: 'primary',
      children: 'Avançar',
    },
    BackwardButtonProps: {
      variant: 'outlined',
      color: 'primary',
      children: 'Voltar',
    },
  };

export interface RegistrationPageProps
  extends RightSideGridProps,
    LeftSideGridProps {}

export function RegistrationPage({
  backgroundImage = {
    src: 'https://via.placeholder.com/1500',
    alt: 'This is a placeholder alt message to provide better acessibility performance, change me',
  },
  ...rest
}: RegistrationPageProps) {
  const leftSidePropsMemoized = React.useMemo(
    () => _.merge(leftSideGridDefaultProps, rest),
    [rest]
  );

  return (
    <Box id="root-grid">
      <Box
        sx={{
          width: '100%',
          minHeight: '102vh',
          display: 'grid',
          gridTemplateColumns: { xs: 'none', lg: '50% 1fr' },
        }}
      >
        <LeftSideGrid {...leftSidePropsMemoized} />
        <RightSideGrid backgroundImage={backgroundImage} />
      </Box>
    </Box>
  );
}

export default RegistrationPage;
