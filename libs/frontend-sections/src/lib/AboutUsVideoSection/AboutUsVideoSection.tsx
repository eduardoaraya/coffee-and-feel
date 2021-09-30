import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface AboutUsVideoSectionProps extends BoxProps<'iframe'> {}

export function AboutUsVideoSection({
  sx,
  src = 'https://www.youtube.com/embed/1qfjLCOXMMg?controls=0',
  ...rest
}: AboutUsVideoSectionProps) {
  return (
    <Box
      sx={{ ...styles.root, ...sx }}
      {...rest}
      component="iframe"
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default AboutUsVideoSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '30em', lg: '83.17em' },
    height: { xs: '16.7em', lg: '46.2em' },
  },
});
