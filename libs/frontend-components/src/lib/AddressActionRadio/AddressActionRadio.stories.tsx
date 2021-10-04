import { Story, Meta } from '@storybook/react';
import {
  AddressActionRadio,
  AddressActionRadioProps,
} from './AddressActionRadio';

export default {
  component: AddressActionRadio,
  title: 'Inputs/AddressActionRadio',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilPhone1',
    },
  },
} as Meta;

const Template: Story<AddressActionRadioProps> = (args) => (
  <AddressActionRadio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: false,
  address: 'Rua das Andradas, 4353 - Centro Histórico - Porto Alegre/RS',
};
