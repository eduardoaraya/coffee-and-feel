import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import AboutUsVideoPlayer from './AboutUsVideoPlayer';

/* eslint-disable-next-line */
export interface AboutUsVideoSectionProps extends BoxProps {}

export function AboutUsVideoSection({ sx, ...rest }: AboutUsVideoSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...rest }}>
      <Container sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Typography sx={styles.title}>Café com sentimento</Typography>
          <Typography sx={styles.caption}>
            Do pequeno produtor para o mundo, esse é o nosso lema, comunicar por
            inteiro o potencial que possui a bebida queridinha dos brasileiros.
            A concepção da nossa marca leva você a sair do automático. Que tal
            uma viagem pelos cafezais?
          </Typography>
        </Box>

        <Box sx={styles.videoContainer}>
          <AboutUsVideoPlayer />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUsVideoSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center' },
    rowGap: { xs: '4em' },
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    rowGap: { xs: '1.5em' },
  },

  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  title: {
    fontSize: { xs: '2em', lg: '4em' },
    color: '#323232',
    fontWeight: 700,
  },

  caption: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.grey[600],
    maxWidth: { xs: '78ch' },
  },
});
