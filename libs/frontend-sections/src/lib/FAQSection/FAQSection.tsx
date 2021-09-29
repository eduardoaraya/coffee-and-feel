import { Box, BoxProps, Container } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  ControlledAccordionProps,
  ControlledAccordions,
} from './AccordionGroup';

/* eslint-disable-next-line */
export interface FAQSectionProps
  extends BoxProps,
    Pick<ControlledAccordionProps, 'accordions'> {}

export function FAQSection({ sx, accordions = [], ...rest }: FAQSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container sx={styles.container} maxWidth="lg">
        <ControlledAccordions accordions={accordions} />
      </Container>
    </Box>
  );
}

export default FAQSection;

const styles = AtlasStylesheet.create({
  root: {},
  container: {},
});
