import {
  CoffeeBagSVG,
  DeliveryTimeSVG,
  DiscountSVG,
} from '@atlascode/coffee-frontend-svg';
import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageBenefitsDesktop,
  SubscriptionPageBenefitsDesktopProps,
} from './SubscriptionPageBenefitsDesktop';

export default {
  component: SubscriptionPageBenefitsDesktop,
  title: 'Subscription/SubscriptionPageBenefitsDesktop',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionPageBenefitsDesktopProps> = (args) => (
  <SubscriptionPageBenefitsDesktop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { caption: '60 capsulas de cafés selecionados', icon: CoffeeBagSVG },
    { caption: '10% OFF em toda loja', icon: DiscountSVG },
    { caption: '100% de desconto no frete', icon: DeliveryTimeSVG },
  ],
};
