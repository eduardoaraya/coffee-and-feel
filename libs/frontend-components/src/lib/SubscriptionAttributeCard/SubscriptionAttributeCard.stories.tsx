import { LocationOn, Star } from '@material-ui/icons';
import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import {
  SubscriptionAttributeCard,
  SubscriptionAttributeCardProps,
} from './SubscriptionAttributeCard';

export default {
  component: SubscriptionAttributeCard,
  title: 'SubscriptionAttributeCard',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ m: 5 }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<SubscriptionAttributeCardProps> = (args) => (
  <SubscriptionAttributeCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Pontuação',
  info: '9',
  icon: Star,
};

export const Secondary = Primary;
Secondary.args = {
  ...Primary.args,
  title: 'Origem',
  icon: LocationOn,
  info: 'Pedra azul - Espírito Santo',
};
