import React from 'react';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import { Button, ButtonProps, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { AnimatePresence } from 'framer-motion';
import Dot from './Dot';
import FirstForm, { FirstFormProps } from './FirstForm';
import SecondForm, { SecondFormProps } from './SecondForm';
import ThirdForm, { ThirdFormProps } from './ThirdForm';

export interface LeftSideGridProps {
  activeIndex?: 0 | 1 | 2;
  ForwardButtonProps?: ButtonProps;
  BackwardButtonProps?: ButtonProps;
  FirstFormProps?: FirstFormProps;
  SecondFormsProps?: SecondFormProps;
  ThirdFormProps?: ThirdFormProps;
}

export const LeftSideGrid = ({
  activeIndex,
  ForwardButtonProps,
  BackwardButtonProps,
  FirstFormProps: firstFormProps,
  SecondFormsProps: secondFormProps,
  ThirdFormProps: thirdFormProps,
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
          py: 8,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {(activeIndex === 0 && (
            <FirstForm
              {...firstFormProps}
              FormContainerProps={{ layoutId: 'one' }}
            />
          )) ||
            (activeIndex === 1 && (
              <SecondForm
                {...secondFormProps}
                FormContainerProps={{ layoutId: 'two' }}
              />
            )) ||
            (activeIndex === 2 && (
              <ThirdForm
                {...thirdFormProps}
                FormContainerProps={{ layoutId: 'three' }}
              />
            ))}
        </AnimatePresence>
      </Box>

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

export default LeftSideGrid;
