import { Banner, BannerProps } from '@atlascode/coffee-front-components';
import {
  AboutUsHistorySection,
  AboutUsHistorySectionProps,
  AboutUsSlider,
  AboutUsSliderProps,
  AboutUsVideoSection,
  AboutUsVideoSectionProps,
} from '@atlascode/coffee-front-sections';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface AboutUsPageProps extends BoxProps {
  BannerProps?: BannerProps;
  VideoSectionProps?: AboutUsVideoSectionProps;
  OurHistorySectionProps?: AboutUsHistorySectionProps;
  GallerySliderSectionProps?: AboutUsSliderProps;
}

export function AboutUsPage({
  sx,
  BannerProps,
  VideoSectionProps,
  OurHistorySectionProps,
  GallerySliderSectionProps,
  ...rest
}: AboutUsPageProps) {
  return (
    <Box className="page" sx={{ ...styles.root, ...sx }} {...rest}>
      <Banner {...BannerProps} />

      <Box sx={styles.section}>
        <AboutUsVideoSection {...VideoSectionProps} />
      </Box>

      <Box sx={styles.section}>
        <AboutUsHistorySection {...OurHistorySectionProps} />
      </Box>

      <Box sx={styles.section}>
        <AboutUsSlider {...GallerySliderSectionProps} />
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
