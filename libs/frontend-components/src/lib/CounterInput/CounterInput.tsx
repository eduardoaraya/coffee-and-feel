import { IconButton, Paper } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { alpha, Box } from '@material-ui/system';
import { UseCounter, UseCounterFunction } from './UseCounter';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CounterInputProps {
  change?: (value: number) => void;
  counter?: UseCounterFunction;
}

export const CounterInput: React.FC<CounterInputProps> = ({
  change,
  counter = UseCounter,
}): JSX.Element => {
  const { add, remove, count } = counter({
    change,
  });

  return (
    <Box
      sx={{
        boxShadow: (theme) =>
          `0 1px 3px 0 ${alpha(theme.palette.secondary.main, 0.16)}`,
        display: 'flex',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFF',
        borderRadius: '4px',
        '.btn': {
          borderRadius: '4px',
        },
        '.count': {
          userSelect: 'none',
          padding: '0 15px',
          fontSize: '1.2em',
        },
      }}
    >
      <IconButton className="btn" onClick={remove}>
        <Remove />
      </IconButton>
      <Box className="count">{count}</Box>
      <IconButton className="btn" onClick={add}>
        <Add />
      </IconButton>
    </Box>
  );
};

export default CounterInput;
