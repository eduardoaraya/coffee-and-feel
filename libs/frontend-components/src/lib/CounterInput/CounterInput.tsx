import { IconButton, Paper } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { alpha, Box } from '@material-ui/system';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CounterInputProps {
  change?: (value: number) => void;
}

export const CounterInput: React.FC<CounterInputProps> = ({
  change,
}): JSX.Element => {
  const [count, setCount] = useState(0);

  const add = (): void => {
    const total = count + 1;
    setCount(total);
    change && change(total);
  };

  const remove = (): void => {
    const total = count === 0 ? 0 : count - 1;
    setCount(total);
    change && change(total);
  };

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
