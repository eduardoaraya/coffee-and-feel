import { IconButton, Box, BoxProps } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { alpha } from '@material-ui/system';
import { UseCounter, UseCounterFunction } from './UseCounter';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CounterInputProps extends BoxProps {
  change?: (value: number) => void;
  counter?: UseCounterFunction;
}

// Hoist state and callbacks so we can better re-use this component
export const CounterInput: React.FC<CounterInputProps> = ({
  change,
  counter = UseCounter,
  sx,
  ...rest
}): JSX.Element => {
  const { add, remove, count } = counter({
    change,
  });

  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <IconButton sx={styles.button} onClick={remove}>
        <Remove fontSize="inherit" />
      </IconButton>
      <Box sx={styles.count}>{count}</Box>
      <IconButton sx={styles.button} onClick={add}>
        <Add fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default CounterInput;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    boxShadow: (theme) =>
      `0px 1px 3px 0px ${alpha(theme.palette.secondary.main, 0.16)}`,
    display: 'flex',
    width: 'min-content',
    center: 'center',
    alignItems: 'center',
    bgcolor: '#FFF',
    borderRadius: '4px',
    gap: { xs: '0em' },
    color: '#323232',
  },
  button: {
    borderRadius: '4px',
    fontSize: { xs: '1.2em' },
    color: '#323232',
  },
  count: {
    userSelect: 'none',
    padding: '',
    fontSize: { xs: '1.1em' },
  },
});
