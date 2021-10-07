import { Story, Meta } from '@storybook/react';
import {
  EnhancedRadioGroup,
  EnhancedRadioGroupProps,
} from './EnhancedRadioGroup';
import {
  DeliveryActionRadio,
  DeliveryActionRadioProps,
} from '../DeliveryActionRadio/DeliveryActionRadio';
import {
  EnhancedRadio,
  EnhancedRadioProps,
} from '../EnhancedRadio/EnhancedRadio';
import {
  AddressActionRadio,
  AddressActionRadioProps,
} from '../AddressActionRadio/AddressActionRadio';

export default {
  component: EnhancedRadioGroup,
  title: 'Inputs/EnhancedRadioGroup',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<EnhancedRadioGroupProps<EnhancedRadioProps>> = (args) => (
  <EnhancedRadioGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [{ active: false }, { active: false }, { active: false }],
  component: EnhancedRadio,
};

const TemplateDelivery: Story<
  EnhancedRadioGroupProps<DeliveryActionRadioProps>
> = (args) => {
  return <EnhancedRadioGroup {...args} />;
};

export const Secondary = TemplateDelivery.bind({});
Secondary.args = {
  activeIndex: 1,
  items: [
    { free: true, active: false },
    { free: false, active: false },
    { free: false, active: false },
  ],
  component: DeliveryActionRadio,
};

const TemplateAddress: Story<EnhancedRadioGroupProps<AddressActionRadioProps>> =
  (args) => {
    return <EnhancedRadioGroup {...args} />;
  };

export const Tertiary = TemplateAddress.bind({});
Tertiary.args = {
  activeIndex: 0,
  component: AddressActionRadio,
  items: [
    { active: false, label: 'Endereço 1' },
    { active: false, label: 'Endereço 2' },
    { active: false, label: 'Endereço 3' },
  ],
};
