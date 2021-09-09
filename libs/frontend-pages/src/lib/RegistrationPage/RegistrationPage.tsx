import {
  Box,
  Button,
  ButtonProps,
  TextField,
  Typography,
} from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import { AnimatePresence } from 'framer-motion';
import Dot from './Dot';
import RightSideGrid, { RightSideGridProps } from './RightSideGrid';
import FirstForm, { FirstFormProps } from './FirstForm';
import SecondForm, { SecondFormProps } from './SecondForm';
import ThirdForm, { ThirdFormProps } from './ThirdForm';
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
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: { xs: 'none', lg: '50% 50%' },
          gridTemplateRows: { xs: '1fr', lg: 'none' },
        }}
      >
        <LeftSideGrid {...leftSidePropsMemoized} />
        <RightSideGrid backgroundImage={backgroundImage} />
      </Box>
    </Box>
  );
}

export default RegistrationPage;
