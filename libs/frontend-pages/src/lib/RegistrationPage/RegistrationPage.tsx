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

interface LeftSideGridProps {
  activeIndex?: number;
  ForwardButtonProps?: ButtonProps;
  BackwardButtonProps?: ButtonProps;
}

const LeftSideGrid = ({
  activeIndex,
  ForwardButtonProps,
  BackwardButtonProps,
}: LeftSideGridProps) => {
  return (
    <MotionBox
      layout
      sx={{
        display: 'grid',
        gridTemplateRows: '10% 60% 20% 10%',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        py: 5,
        px: { xs: 4, lg: 10 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: (theme) => theme.palette.grey[500] }}
      >
        Faça seu cadastro em três passos.
      </Typography>

      <Box
        sx={{
          minHeight: '500px',
        }}
      ></Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', lg: 'space-evenly' },
        }}
      >
        <Button {...BackwardButtonProps} />
        <Button {...ForwardButtonProps} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        <Dot index={0} value={activeIndex} />
        <Dot index={1} value={activeIndex} />
        <Dot index={2} value={activeIndex} />
      </Box>
    </MotionBox>
  );
};

const FirstForm = () => {
  return (
    <MotionBox
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        minHeight: '500px',
      }}
    >
      <TextField fullWidth placeholder="Nome" label="Nome" />
      <TextField fullWidth placeholder="Sobrenome" label="Sobrenome" />
      <TextField fullWidth placeholder="Email" label="Email" />
    </MotionBox>
  );
};
