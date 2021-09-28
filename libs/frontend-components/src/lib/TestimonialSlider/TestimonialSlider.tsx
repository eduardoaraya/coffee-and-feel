import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import TestimonialPicture from './TestimonialPicture';
import { CircleIconButton } from '@atlascode/coffee-front-components';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

/* eslint-disable-next-line */
export interface TestimonialSliderProps extends BoxProps {}

export function TestimonialSlider({ sx, ...rest }: TestimonialSliderProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.grid}>
          <TestimonialPicture />
          <Box sx={styles.textContainer}>
            <Box>
              <Typography variant="h2" sx={styles.title}>
                Quem assina recomenda
              </Typography>
            </Box>

            <Box>
              <Typography variant="caption" sx={styles.attestantSocial}>
                @fernandes.rafa
              </Typography>

              <Typography variant="subtitle1" sx={styles.testimonial}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis”.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={styles.attestant}>
                Rafaela Fernandes
              </Typography>

              <Typography variant="body1" sx={styles.attestantLocation}>
                São Paulo/SP
              </Typography>
            </Box>

            <Box sx={styles.navigationButtonContainer}>
              <CircleIconButton icon={ArrowBack} />
              <CircleIconButton icon={ArrowForward} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialSlider;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {},
  grid: {
    display: 'flex',
    columnGap: { lg: '6em' },
    rowGap: { xs: '3em' },
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: { xs: 'center', lg: 'unset' },
  },

  textContainer: {
    textAlign: { xs: 'center', lg: 'start' },
    gap: { xs: '1.5em', lg: '3em' },
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: { xs: '2em', lg: '3em' },
  },
  testimonial: {
    maxWidth: { xs: '36ch' },
    fontSize: { xs: '1.6em', lg: '2em' },
    color: '#333',
  },
  attestant: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
  },
  attestantSocial: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
  },
  attestantLocation: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.grey[500],
  },

  navigationButtonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: { xs: 'center', lg: 'flex-start' },
    gap: { xs: '3em' },
  },
});
