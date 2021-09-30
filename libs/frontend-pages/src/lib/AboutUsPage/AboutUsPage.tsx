import { Banner, BannerProps } from '@atlascode/coffee-front-components';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface AboutUsPageProps extends BoxProps {
  BannerProps?: BannerProps;
}

export function AboutUsPage({ sx, BannerProps, ...rest }: AboutUsPageProps) {
  return (
    <Box className="page" sx={{ ...styles.root, ...sx }} {...rest}>
      <Banner {...BannerProps} />
    </Box>
  );
}

export default AboutUsPage;

const styles = AtlasStylesheet.create({
  root: {},
});
