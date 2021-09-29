import { Box, BoxProps, Container } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Banner,
  BannerProps,
  TestimonialSlider,
} from '@atlascode/coffee-front-components';
import {
  FAQSection,
  SubscriptionBenefitsListSection,
  SubscriptionCoffeeList,
  SubscriptionPageBenefitsSection,
  SubscriptionPageBenefitsSectionProps,
  SubscriptionPageDefenseSection,
  SubscriptionPageStepsSection,
} from '@atlascode/coffee-front-sections';
import type {
  SubscriptionBenefitsListSectionProps,
  SubscriptionCoffeeListProps,
  FAQSectionProps,
} from '@atlascode/coffee-front-sections';
import type { TestimonialSliderProps } from '@atlascode/coffee-front-components';

export interface SubscriptionPageProps
  extends BoxProps,
    SubscriptionPageBenefitsSectionProps,
    SubscriptionCoffeeListProps,
    Pick<TestimonialSliderProps, 'testimonials'>,
    SubscriptionBenefitsListSectionProps,
    FAQSectionProps {
  BannerProps?: BannerProps;
}

export function SubscriptionPage({
  sx,
  BannerProps,
  subscriptionBenefits,
  subscriptionCategories,
  testimonials,
  subscriptionPlansList,
  accordions,
  ...rest
}: SubscriptionPageProps) {
  return (
    <Box className="page" sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth={false} sx={styles.container}>
        <Banner {...BannerProps} />

        <Box sx={styles.section}>
          <SubscriptionPageStepsSection />
        </Box>

        <Box sx={styles.section}>
          <SubscriptionPageDefenseSection />
        </Box>

        <Box sx={styles.section}>
          <SubscriptionPageBenefitsSection
            subscriptionBenefits={subscriptionBenefits}
          />
        </Box>

        <Box sx={styles.section}>
          <SubscriptionCoffeeList
            subscriptionCategories={subscriptionCategories}
          />
        </Box>

        <Box sx={styles.section}>
          <TestimonialSlider testimonials={testimonials} />
        </Box>

        <Box sx={styles.section}>
          <SubscriptionBenefitsListSection
            subscriptionPlansList={subscriptionPlansList}
          />
        </Box>

        <Box sx={styles.section}>
          <FAQSection accordions={accordions} />
        </Box>
      </Container>
    </Box>
  );
}

export default SubscriptionPage;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    m: { xs: 0 },
    p: { xs: 0 },
  },

  section: {
    py: { xs: '6em', lg: '6em' },
  },

  banner: {},
});
