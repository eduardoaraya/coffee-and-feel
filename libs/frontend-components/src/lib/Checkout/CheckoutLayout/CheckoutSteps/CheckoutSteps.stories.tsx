import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import { CheckoutSteps, CheckoutStepsProps } from './CheckoutSteps';

export default {
  component: CheckoutSteps,
  title: 'Checkout/CheckoutSteps',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ mt: 5, width: { xs: '100%', lg: '500px' } }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<CheckoutStepsProps> = (args) => (
  <CheckoutSteps {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  steps: ['Identificação', 'Entrega', 'Pagamento'],
  activeStep: 1,
};
