import { Story, Meta } from '@storybook/react';
import {
  CheckoutSubscriptionCoffee,
  CheckoutSubscriptionCoffeeProps,
  SlotList,
} from './CheckoutSubscriptionCoffee';
import { TextField, MenuItem, TextFieldProps } from '@material-ui/core';
import React from 'react';

export default {
  component: CheckoutSubscriptionCoffee,
  title: 'Checkout/Checkout Layout/CheckoutSubscriptionCoffee',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutSubscriptionCoffeeProps> = (args) => (
  <CheckoutSubscriptionCoffee {...args} />
);

const coffeSelectList = [
  <MenuItem value="Café 1"> Café 1 </MenuItem>,
  <MenuItem value="Café 2"> Café 2 </MenuItem>,
  <MenuItem value="Café 3"> Café 3 </MenuItem>,
  <MenuItem value="Café 4"> Café 4 </MenuItem>,
];

const coffeListProps: SlotList = {
  label: 'Café especiais 1',
  slots: [
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Você receberá 10 cápsulas de cada café selecionado',
  list: [
    { ...coffeListProps },
    { ...coffeListProps, label: 'Cafés especiais 2' },
    { ...coffeListProps, label: 'Cafés especiais 3' },
  ],
};
