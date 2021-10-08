import { Story, Meta } from '@storybook/react';
import {
  TextPriceActionRadio,
  TextPriceActionRadioProps,
} from './TextPriceActionRadio';

export default {
  component: TextPriceActionRadio,
  title: 'Inputs/TextPriceActionRadio',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<TextPriceActionRadioProps> = (args) => (
  <TextPriceActionRadio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: true,
  label: 'Standard',
  price: 79.5,
};
