import { Story, Meta } from '@storybook/react';
import {
  DeliveryActionRadio,
  DeliveryActionRadioProps,
} from './DeliveryActionRadio';

export default {
  component: DeliveryActionRadio,
  title: 'Inputs/DeliveryActionRadio',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilPhone1',
    },
  },
} as Meta;

const Template: Story<DeliveryActionRadioProps> = (args) => (
  <DeliveryActionRadio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: false,
  free: false,
  arrival: 'Chegará entre dia 10 e 13 de outubro',
  price: 17,
};
