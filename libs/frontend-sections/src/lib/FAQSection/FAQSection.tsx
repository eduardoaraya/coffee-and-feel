import { Box, BoxProps, Container } from '@material-ui/core';
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
        <AccordionGroup accordions={accordions} />
      </Container>
    </Box>
  );
}

export default FAQSection;

const styles = AtlasStylesheet.create({
  root: {},
  container: {},
});
