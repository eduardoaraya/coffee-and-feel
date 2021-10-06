import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { AddressActionRadio } from '../AddressActionRadio/AddressActionRadio';
import {
  EnhancedRadioProps,
  EnhancedRadio,
} from '../EnhancedRadio/EnhancedRadio';
import { alpha } from '@material-ui/system';

/* eslint-disable-next-line */
export interface EnhancedRadioGroupProps<
  T extends EnhancedRadioProps = EnhancedRadioProps
> extends BoxProps {
  activeIndex?: number;
  items: T[];
  component?: React.FC<T>;
}

export function EnhancedRadioGroup({
  sx,
  activeIndex = 0,
  items,
  component: Component = EnhancedRadio,
  ...rest
}: EnhancedRadioGroupProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      {items.map(({ JSS, active, ...value }, index) => {
        return (
          <Component
            key={index}
            {...value}
            active={activeIndex === index}
            JSS={{
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
}

export default EnhancedRadioGroup;

const styles = AtlasStylesheet.create({
  root: {},
  body: {
    height: 'auto',
    p: 2,
    borderRadius: '0px 0px 0px 0px',

    ':before': {
      borderRadius: '0px',
      borderBottom: (theme) => `0px solid ${theme.palette.grey[400]}`,
      borderTop: (theme) => `0px solid ${theme.palette.grey[400]}`,
      borderLeft: (theme) => `1px solid ${theme.palette.grey[400]}`,
      borderRight: (theme) => `1px solid ${theme.palette.grey[400]}`,
    },
  },
  head: {
    height: 'auto',
    p: 2,
    borderRadius: '8px 8px 0px 0px',

    ':before': {
      borderRadius: '8px 8px 0px 0px',
      border: (theme) => `1px solid ${theme.palette.grey[400]}`,
      borderBottom: (theme) => `0px solid ${theme.palette.grey[400]}`,
    },
  },
  tail: {
    height: 'auto',
    p: 2,
    borderRadius: '0px 0px 8px 8px',

    ':before': {
      borderRadius: '0px 0px 8px 8px',
      border: (theme) => `1px solid ${theme.palette.grey[400]}`,
      borderTop: (theme) => `0px solid ${theme.palette.grey[400]}`,
    },
  },
});
