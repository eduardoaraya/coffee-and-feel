import { Story, Meta } from '@storybook/react';
import {
  CheckoutDiscount,
  CheckoutDiscountProps,
} from './CheckoutSummaryDiscount';

export default {
  component: CheckoutDiscount,
  title: 'Checkout/Checkout Summary/CheckoutDiscount',
} as Meta;

const Template: Story<CheckoutDiscountProps> = (args) => (
  <CheckoutDiscount {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Custom label',
};
Secondary.storyName = 'Custom label';

export const Third = Template.bind({});
Third.args = {
  caption: 'Cupom de 10% foi aplicado!',
};
Third.storyName = 'Helper text';

export const Fourth = Template.bind({});
Fourth.args = {
  InputWithButtonProps: {
    ButtonProps: {
      loading: true,
    },
  },
};
Fourth.storyName = 'Loading state';
