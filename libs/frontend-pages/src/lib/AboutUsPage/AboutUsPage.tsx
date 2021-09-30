import { Banner, BannerProps } from '@atlascode/coffee-front-components';
import {
  AboutUsHistorySection,
  AboutUsSlider,
  AboutUsVideoSection,
} from '@atlascode/coffee-front-sections';
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

      <Box sx={styles.section}>
        <AboutUsVideoSection />
      </Box>

      <Box sx={styles.section}>
        <AboutUsHistorySection />
      </Box>

      <Box sx={styles.section}>
        <AboutUsSlider list={list} />
      </Box>
    </Box>
  );
}

export default AboutUsPage;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  section: {
    py: { xs: '4.5em', lg: '7.5em' },
  },
});

const list = [
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
];
