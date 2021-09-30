import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

export type AboutUsVideoPlayerProps = BoxProps<'iframe'>;

export const AboutUsVideoPlayer = ({
  sx,
  src = 'https://www.youtube.com/embed/1qfjLCOXMMg?controls=0',
  ...rest
}: AboutUsVideoPlayerProps) => {
  return (
    <Box
      sx={{ ...styles.root, ...sx }}
      {...rest}
      component="iframe"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default AboutUsVideoPlayer;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '30em', sm: '60em', lg: '83.17em' },
    height: { xs: '16.7em', sm: '34em', lg: '46.2em' },
  },
});
