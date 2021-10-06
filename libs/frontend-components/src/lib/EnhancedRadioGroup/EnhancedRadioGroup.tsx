import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { EnhancedRadioProps } from '../EnhancedRadio/EnhancedRadio';

export interface EnhancedRadioGroupProps<
  T extends EnhancedRadioProps = EnhancedRadioProps
> extends BoxProps {
  activeIndex?: number;
  items: T[];
  component: React.FC<T>;
}

export function EnhancedRadioGroup<
  T extends EnhancedRadioProps = EnhancedRadioProps
>({
  sx,
  activeIndex = 0,
  items,
  component: Component,
  ...rest
}: EnhancedRadioGroupProps<T>) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      {items.map(({ JSS, active, ...value }, index) => {
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
      borderBottom: (theme) => `0px solid ${theme.palette.grey[50]}`,
      borderTop: (theme) => `0px solid ${theme.palette.grey[50]}`,
      borderLeft: (theme) => `1px solid ${theme.palette.grey[200]}`,
      borderRight: (theme) => `1px solid ${theme.palette.grey[200]}`,
    },
  },
  head: {
    height: 'auto',
    p: 2,
    borderRadius: '8px 8px 0px 0px',

    ':before': {
      borderRadius: '8px 8px 0px 0px',
      border: (theme) => `1px solid ${theme.palette.grey[200]}`,
      borderBottom: (theme) => `0px solid ${theme.palette.grey[50]}`,
    },
  },
  tail: {
    height: 'auto',
    p: 2,
    borderRadius: '0px 0px 8px 8px',

    ':before': {
      borderRadius: '0px 0px 8px 8px',
      border: (theme) => `1px solid ${theme.palette.grey[200]}`,
      borderTop: (theme) => `0px solid ${theme.palette.grey[50]}`,
    },
  },
});
