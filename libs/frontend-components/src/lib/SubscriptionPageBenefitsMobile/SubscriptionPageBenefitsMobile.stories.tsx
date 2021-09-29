import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageBenefitsMobile,
  SubscriptionPageBenefitsMobileProps,
} from './SubscriptionPageBenefitsMobile';
import {
  CoffeeBagSVG,
  DeliveryTimeSVG,
  DiscountSVG,
} from '@atlascode/coffee-frontend-svg';

export default {
  component: SubscriptionPageBenefitsMobile,
  title: 'SubscriptionPageBenefitsMobile',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionPageBenefitsMobileProps> = (args) => (
  <SubscriptionPageBenefitsMobile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { caption: '60 capsulas de cafés selecionados', icon: CoffeeBagSVG },
    { caption: '10% OFF em toda loja', icon: DiscountSVG },
    { caption: '100% de desconto no frete', icon: DeliveryTimeSVG },
  ],
} as SubscriptionPageBenefitsMobileProps;
