import React from 'react';
import { Box, BoxProps } from '@material-ui/core';

export type CreditCardChipSVGProps = BoxProps;

const CreditCardChipSVG = (props: CreditCardChipSVGProps) => {
  return (
    <Box
      component={'svg'}
      width="37"
      height="25"
      viewBox="0 0 37 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.08203 20.5C9.08203 23 11.082 25 13.582 25H18.2487V20H9.08203V20.5Z"
        fill="white"
      />
      <path
        d="M18.2487 13.3333H9.08203V18.4166H18.2487V13.3333Z"
        fill="white"
      />
      <path
        d="M9.08203 4.5V5H18.2487V0H13.4987C11.082 0 9.08203 2 9.08203 4.5Z"
        fill="white"
      />
      <path
        d="M32.332 0H27.7487H26.1654H19.832V5V6.58333V11.75V13.3333V18.4167V20V25H26.1654V20V18.4167V13.3333V11.75V6.66667V5.08333H27.7487H36.7487V4.58333C36.832 2 34.832 0 32.332 0Z"
        fill="white"
      />
      <path
        d="M18.2487 6.58337H9.08203V11.6667H18.2487V6.58337Z"
        fill="white"
      />
      <path d="M36.75 6.58337H27.75V11.6667H36.75V6.58337Z" fill="white" />
      <path d="M36.75 13.3333H27.75V18.4166H36.75V13.3333Z" fill="white" />
      <path
        d="M27.75 25H32.3333C34.8333 25 36.8333 23 36.8333 20.5V20H27.75V25Z"
        fill="white"
      />
      <path d="M4.16667 8.33331L0 12.5L4.16667 16.6666V8.33331Z" fill="white" />
    </Box>
  );
};

export default CreditCardChipSVG;
