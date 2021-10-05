import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import {
  CheckoutMenuOverview,
  CheckoutMenuOverviewProps,
} from './CheckoutHeaderAction';

export default {
  component: CheckoutMenuOverview,
  title: 'Checkout/Checkout Layout/CheckoutMenuOverview',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '150px', m: 3 }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<CheckoutMenuOverviewProps> = (args) => (
  <CheckoutMenuOverview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
