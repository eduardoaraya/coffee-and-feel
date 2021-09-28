import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { CoffeeLeafSVG } from '@atlascode/coffee-frontend-svg';

/* eslint-disable-next-line */
export interface SubscriptionPageDefenseSectionProps extends BoxProps {}

export function SubscriptionPageDefenseSection({
  sx,
  ...rest
}: SubscriptionPageDefenseSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth={false} sx={styles.container}>
        <Box sx={styles.grid}>
          <Box
            sx={styles.picture}
            component="img"
            src="imgs/subscription-defense.webp"
          />

          <Box sx={styles.titleContainer}>
            <Typography variant="h2" sx={styles.title}>
              Microlotes e cafés especiais para você.
            </Typography>

            <Typography variant="subtitle1" sx={styles.caption}>
              Tomar café de qualidade é perfeito. Agora, tomar café sabendo que
              ele cresceu baseado na história de pequenos produtores com base
              familiar é melhor ainda.
            </Typography>
          </Box>

          <Box sx={styles.illustrationContainer}>
            <CoffeeLeafSVG sx={styles.illustration} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SubscriptionPageDefenseSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {
    p: { xs: 0 },
    m: { xs: 0 },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '50% 30% 20%' },
    gridAutoFlow: 'row',
    rowGap: { xs: '3em' },
  },
  picture: {
    height: { xs: 'auto' },
    width: { xs: '95%', lg: '90%' },
  },
  illustrationContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: { xs: 'none', lg: 'flex' },
    alignItems: 'flex-end',
  },
  illustration: {},
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: { xs: 'center', lg: 'flex-start' },
    gap: { xs: '2em' },
    textAlign: { xs: 'center', lg: 'start' },
  },
  title: {
    fontWeight: 700,
    fontSize: { xs: '2em', lg: '3em' },
    maxWidth: { xs: '20ch' },
  },
  caption: {
    fontSize: { xs: '1.4em', lg: '2em' },
    maxWidth: { xs: '42ch' },
    lineHeight: { xs: '1.75em', lg: '1.35em' },
  },
});
