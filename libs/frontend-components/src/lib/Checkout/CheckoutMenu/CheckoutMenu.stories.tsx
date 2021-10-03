import { Story, Meta } from '@storybook/react';
import { CheckoutMenu, CheckoutMenuProps } from './CheckoutMenu';
import { CheckoutLayout } from '../CheckoutLayout/CheckoutLayout';
import { Box } from '@material-ui/system';

export default {
  component: CheckoutMenu,
  title: 'Checkout/CheckoutMenu',
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

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};
