import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import Dot, { DotProps } from './Dot';

/* eslint-disable-next-line */
export interface PaginationDotsProps extends BoxProps {
  amount: number;
  activeIndex: number;
  DotProps?: DotProps;
}

export function PaginationDots({
  sx,
  amount,
  activeIndex,
  DotProps,
  ...rest
}: PaginationDotsProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      {Array.from({ length: amount }).map((value, index) => {
        return <Dot {...DotProps} active={activeIndex === index} key={index} />;
      })}
    </Box>
  );
}

export default PaginationDots;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    gap: { xs: '1em' },
  },
});
