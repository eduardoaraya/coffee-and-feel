import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { AddressActionRadio } from '../AddressActionRadio/AddressActionRadio';
import { EnhancedRadioProps } from '../EnhancedRadio/EnhancedRadio';
import { alpha } from '@material-ui/system';

/* eslint-disable-next-line */
export interface EnhancedRadioGroupProps<
  T extends EnhancedRadioProps = EnhancedRadioProps
> extends BoxProps {
  activeIndex?: number;
  items: T[];
}

export function EnhancedRadioGroup({
  sx,
  activeIndex = 0,
  ...rest
}: EnhancedRadioGroupProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <AddressActionRadio JSS={{ root: { ...styles.head } }} active={true} />
      <AddressActionRadio JSS={{ root: { ...styles.body } }} active={true} />
      <AddressActionRadio JSS={{ root: { ...styles.body } }} active={true} />
      <AddressActionRadio JSS={{ root: { ...styles.body } }} active={true} />
      <AddressActionRadio JSS={{ root: { ...styles.tail } }} active={true} />
    </Box>
  );
}

export default EnhancedRadioGroup;

const styles = AtlasStylesheet.create({
  root: {},
  body: {
    height: 'auto',
    p: 2.5,
    borderRadius: '0px 0px 0px 0px',

    ':before': {
      borderRadius: '0px',
      border: (theme) =>
        `0.5px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    },
  },
  head: {
    height: 'auto',
    p: 2.5,
    borderRadius: '8px 8px 0px 0px',

    ':before': {
      borderRadius: '8px 8px 0px 0px',
      borderBottom: (theme) =>
        `0.5px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    },
  },
  tail: {
    height: 'auto',
    p: 2.5,
    borderRadius: '0px 0px 8px 8px',

    ':before': {
      borderRadius: '0px 0px 8px 8px',
      borderTop: (theme) =>
        `0.5px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    },
  },
});
