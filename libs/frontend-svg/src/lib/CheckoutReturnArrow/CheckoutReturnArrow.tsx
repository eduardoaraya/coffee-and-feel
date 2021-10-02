import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface CheckoutReturnArrowProps extends BoxProps<'svg'> {}

export function CheckoutReturnArrow({
  fill = '#323232',
  component = 'svg',
  ...rest
}: CheckoutReturnArrowProps) {
  return (
    <Box
      width="19"
      height="12"
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      component={component}
      {...rest}
    >
      <path
        d="M17 1V5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H19V1H17Z"
        fill={fill}
      />
    </Box>
  );
}

export default CheckoutReturnArrow;
