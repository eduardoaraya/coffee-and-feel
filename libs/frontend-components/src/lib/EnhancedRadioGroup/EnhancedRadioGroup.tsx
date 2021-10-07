import React from 'react';
import { Box } from '@material-ui/core';
import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import { EnhancedRadioProps } from '../EnhancedRadio/EnhancedRadio';

export interface EnhancedRadioGroupProps<C extends EnhancedRadioProps> {
  component: (props: C) => JSX.Element;
  items?: C[];
  activeIndex?: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const EnhancedRadioGroup = <T extends EnhancedRadioProps>({
  component: Component,
  activeIndex = 0,
  items = [],
  ...rest
}: EnhancedRadioGroupProps<T>) => {
  return (
    <Box sx={styles.root}>
      {items.map(({ JSS, ...value }, index) => {
        return (
          <Component
            key={index}
            {...(value as T)}
            active={activeIndex === index}
            JSS={{
              ...JSS,
              root: {
                ...(index === 0
                  ? styles.head
                  : index === items.length - 1
                  ? styles.tail
                  : styles.body),
              },
            }}
          />
        );
      })}
    </Box>
  );
};

export default EnhancedRadioGroup;

const styles = AtlasStylesheet.create({
  root: {},
  body: {
    height: 'auto',
    p: 1,
    borderRadius: '0px 0px 0px 0px',

    ':before': {
      borderRadius: '0px',
      borderBottom: (theme) => `0px solid ${theme.palette.grey[50]}`,
      borderTop: (theme) => `0px solid ${theme.palette.grey[50]}`,
      borderLeft: (theme) => `1px solid ${theme.palette.grey[200]}`,
      borderRight: (theme) => `1px solid ${theme.palette.grey[200]}`,
    },
  },
  head: {
    height: 'auto',
    p: 1,
    borderRadius: '8px 8px 0px 0px',

    ':before': {
      borderRadius: '8px 8px 0px 0px',
      border: (theme) => `1px solid ${theme.palette.grey[200]}`,
      borderBottom: (theme) => `0px solid ${theme.palette.grey[50]}`,
    },
  },
  tail: {
    height: 'auto',
    p: 1,
    borderRadius: '0px 0px 8px 8px',

    ':before': {
      borderRadius: '0px 0px 8px 8px',
      border: (theme) => `1px solid ${theme.palette.grey[200]}`,
      borderTop: (theme) => `0px solid ${theme.palette.grey[50]}`,
    },
  },
});
