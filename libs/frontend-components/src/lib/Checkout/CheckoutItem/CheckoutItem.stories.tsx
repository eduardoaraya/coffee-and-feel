import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import { CheckoutItem, CheckoutItemProps } from './CheckoutItem';

export default {
  component: CheckoutItem,
  title: 'Checkout/CheckoutItem',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          mt: 5,
          ml: 3,
          width: '100%',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<CheckoutItemProps> = (args) => <CheckoutItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: {
    src: 'imgs/coffee-package.png',
    alt: 'This is an alt text',
  },
  title:
    ' Café expresso edição especial - 30 cápsulas aloha awooogaaaaa hello world',
  price: 15,
};
