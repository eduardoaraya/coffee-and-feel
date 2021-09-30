import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface AboutUsPageProps extends BoxProps {}

export function AboutUsPage({ sx, ...rest }: AboutUsPageProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default AboutUsPage;

const styles = AtlasStylesheet.create({
  root: {},
});
