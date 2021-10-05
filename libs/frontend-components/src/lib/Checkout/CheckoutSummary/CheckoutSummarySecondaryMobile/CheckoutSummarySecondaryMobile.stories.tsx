import { Story, Meta } from '@storybook/react';
import {
  CheckoutMenu,
  CheckoutMenuProps,
} from './CheckoutSummarySecondaryMobile';
import { CheckoutLayout } from '../../CheckoutLayout/CheckoutLayout';
import { Box } from '@material-ui/system';
import { CheckoutItemProps } from '../CheckoutSummaryItem/CheckoutSummaryItem';

export default {
  component: CheckoutMenu,
  title: 'Checkout/Checkout Summary/Checkout Summary - Secondary - Mobile',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilPhone1',
    },
  },
  decorators: [
    (Story) => (
      <CheckoutLayout>
        <Story />
      </CheckoutLayout>
    ),
  ],
} as Meta;

const Template: Story<CheckoutMenuProps> = (args) => <CheckoutMenu {...args} />;

const checkoutItem: CheckoutItemProps = {
  img: {
    src: 'imgs/coffee-package.png',
    alt: 'This is an alt text',
  },
  title:
    ' Café expresso edição especial - 30 cápsulas aloha awooogaaaaa hello world',
  price: 15,
};

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  items: [
    { ...checkoutItem },
    { ...checkoutItem, price: 175 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
  ],
};
