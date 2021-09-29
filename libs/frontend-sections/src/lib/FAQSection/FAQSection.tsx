import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  AccordionGroup,
  AccordionGroupProps,
} from '@atlascode/coffee-front-components';

/* eslint-disable-next-line */
export interface FAQSectionProps
  extends BoxProps,
    Pick<AccordionGroupProps, 'accordions'> {}

export function FAQSection({ sx, accordions = [], ...rest }: FAQSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container sx={styles.container} maxWidth="lg">
        <Typography variant="h2" sx={styles.title}>
          Perguntas frequentes.
        </Typography>

        <Box sx={styles.accordionsContainer}>
          <AccordionGroup accordions={accordions} />
        </Box>
      </Container>
    </Box>
  );
}

export default FAQSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {},
  accordionsContainer: {},
  title: {
    pb: { xs: '2em' },
    textAlign: 'center',
    fontWeight: 700,
    fontSize: { xs: '2em', lg: '3em' },
  },
});

type StyleType = typeof styles;
