import {
  CoffeeBagSVG,
  DeliveryTimeSVG,
  DiscountSVG,
} from '@atlascode/coffee-frontend-svg';
import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageBenefitsSection,
  SubscriptionPageBenefitsSectionProps,
} from './SubscriptionPageBenefitsSection';

export default {
  component: SubscriptionPageBenefitsSection,
  title: 'SubscriptionPageBenefitsSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionPageBenefitsSectionProps> = (args) => (
  <SubscriptionPageBenefitsSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  subscriptionBenefits: [
    {
      categoryLabel: 'Standard',
      benefits: [
        { caption: '60 capsulas de cafés selecionados', icon: CoffeeBagSVG },
        { caption: '10% OFF em toda loja', icon: DiscountSVG },
        { caption: '100% de desconto no frete', icon: DeliveryTimeSVG },
      ],
    },
    {
      categoryLabel: 'Premium',
      benefits: [
        { caption: '40 capsulas de cafés selecionados', icon: CoffeeBagSVG },
        { caption: '50% de desconto no frete', icon: DeliveryTimeSVG },
      ],
    },
  ],
} as SubscriptionPageBenefitsSectionProps;
