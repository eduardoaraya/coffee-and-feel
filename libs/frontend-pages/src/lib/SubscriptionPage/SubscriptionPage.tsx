import { Box, BoxProps, Container } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Banner, BannerProps } from '@atlascode/coffee-front-components';
import { SubscriptionClubAboutSection } from '@atlascode/coffee-front-sections';

/* eslint-disable-next-line */
export interface SubscriptionPageProps extends BoxProps {
  BannerProps?: BannerProps;
}

export function SubscriptionPage({
  sx,
  BannerProps,
  ...rest
}: SubscriptionPageProps) {
  return (
    <Box className="page" sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth={false} sx={styles.container}>
        <Banner {...BannerProps} />
      </Container>
    </Box>
  );
}

export default SubscriptionPage;

const styles = AtlasStylesheet.create({
  root: {},

  container: {
    m: { xs: 0 },
    p: { xs: 0 },
  },

  banner: {},
});
