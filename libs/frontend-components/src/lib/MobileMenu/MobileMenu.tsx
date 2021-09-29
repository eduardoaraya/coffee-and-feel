import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface MobileMenuProps extends BoxProps {}

export function MobileMenu({ sx, ...rest }: MobileMenuProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default MobileMenu;

const styles = AtlasStylesheet.create({
  root: {},
});
