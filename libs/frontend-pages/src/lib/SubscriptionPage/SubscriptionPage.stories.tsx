import { Story, Meta } from '@storybook/react';
import { SubscriptionPage, SubscriptionPageProps } from './SubscriptionPage';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';
export default {
  component: SubscriptionPage,
  title: 'SubscriptionPage',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <LayoutEcommerce>
        <Story />
      </LayoutEcommerce>
    ),
  ],
} as Meta;

const Template: Story<SubscriptionPageProps> = (args) => (
  <SubscriptionPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  BannerProps: {
    items: [
      {
        desktopURL: 'imgs/clube-assinatura-page-banner-img.png',
        mobileURL: 'https://via.placeholder.com/750',
      },
    ],
    SwiperProps: {
      enabled: false,
    },
  },
};
