import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  SubscriptionPageFirstSVG,
  SubscriptionPageSecondSVG,
  SubscriptionPageThirdSVG,
} from '@atlascode/coffee-frontend-svg';

/* eslint-disable-next-line */
export interface SubscriptionPageStepsSectionProps extends BoxProps {}

export function SubscriptionPageStepsSection({
  sx,
  ...rest
}: SubscriptionPageStepsSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth="lg" sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          Como funciona o clube de assinatura?
        </Typography>

        <Box sx={styles.grid}>
          <Box sx={styles.illustrationContainer}>
            <SubscriptionPageFirstSVG sx={styles.illustration} />
            <Typography sx={styles.illustrationCaption} variant="subtitle1">
              Escolha o plano que mais combina com você.
            </Typography>
          </Box>

          <Box sx={styles.illustrationContainer}>
            <SubscriptionPageSecondSVG sx={styles.illustration} />
            <Typography sx={styles.illustrationCaption} variant="subtitle1">
              Selecione os cafés que você quer receber.
            </Typography>
          </Box>

          <Box sx={styles.illustrationContainer}>
            <SubscriptionPageThirdSVG sx={styles.illustration} />
            <Typography sx={styles.illustrationCaption} variant="subtitle1">
              Receba todos os meses na sua casa.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SubscriptionPageStepsSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  illustrationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: { xs: '2.5em' },
  },

  illustrationCaption: {
    fontSize: { xs: '2em' },
    maxWidth: { xs: '22ch' },
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: '5em', lg: '8em' },
  },

  title: {
    textAlign: 'center',
    fontSize: { xs: '2.2em', lg: '3em' },
    fontWeight: 700,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '33.333% 33.333% 33.333%' },
    gridAutoFlow: 'row',
    width: '100%',
    height: '100%',
    justifyItems: { xs: 'center' },
    rowGap: { xs: '9em' },
  },

  illustration: {
    width: { xs: '21em' },
    height: { xs: '16em' },
  },
});
