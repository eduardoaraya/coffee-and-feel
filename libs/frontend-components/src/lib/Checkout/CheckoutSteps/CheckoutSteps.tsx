import { Stepper, Step, StepLabel, StepperProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckoutStepsProps extends StepperProps {
  steps: string[];
}

export function CheckoutSteps({
  sx,
  alternativeLabel = true,
  steps = [],
  ...rest
}: CheckoutStepsProps) {
  return (
    <Stepper
      sx={{ ...styles.root, ...sx }}
      alternativeLabel={alternativeLabel}
      {...rest}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',

    '.MuiStepIcon-text': {
      fontSize: { xs: '0.65em' },
    },

    '.MuiSvgIcon-root': {
      fontSize: { xs: '2em' },

      '&.Mui-active': {
        color: (theme) => theme.palette.success.main,
      },

      '&.Mui-completed': {
        color: (theme) => theme.palette.success.main,
      },
    },

    '.MuiStepLabel-label': {
      fontSize: { xs: '1em' },
    },
  },
});
