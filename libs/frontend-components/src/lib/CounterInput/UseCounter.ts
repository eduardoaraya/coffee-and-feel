import { useState } from 'react';

export interface UseCounterProps {
  initial?: number;
  change?: (number: number) => void;
}

export interface UseCounterInterface {
  add: () => void;
  remove: () => void;
  count: number;
}

export type UseCounterFunction = (
  props: UseCounterProps
) => UseCounterInterface;

export const UseCounter: UseCounterFunction = ({
  initial = 1,
  change,
}: UseCounterProps): UseCounterInterface => {
  const [count, setCount] = useState<number>(initial);

  const add = (): void => {
    const total = count + 1;
    setCount(total);
    change && change(total);
  };

  const remove = (): void => {
    const total = count === 1 ? 1 : count - 1;
    setCount(total);
    change && change(total);
  };

  return {
    count,
    remove,
    add,
  };
};
