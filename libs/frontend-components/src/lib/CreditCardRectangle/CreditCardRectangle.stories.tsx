import { Story, Meta } from '@storybook/react';
import {
  CreditCardRectangle,
  CreditCardRectangleProps,
} from './CreditCardRectangle';

export default {
  component: CreditCardRectangle,
  title: 'Checkout/CreditCardRectangle',
} as Meta;

const Template: Story<CreditCardRectangleProps> = (args) => (
  <CreditCardRectangle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  CCNumber: '**** 6345',
  CCBrand: 'VISA',
};
