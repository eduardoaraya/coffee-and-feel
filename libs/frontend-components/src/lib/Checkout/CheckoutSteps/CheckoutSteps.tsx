import * as React from 'react';
import { Box, Stepper, Step, StepLabel } from '@material-ui/core';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckoutStepsProps {}

export function CheckoutSteps() {
  return (
    <Box sx={{ width: '100%', fontFamily: 'Roboto' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
