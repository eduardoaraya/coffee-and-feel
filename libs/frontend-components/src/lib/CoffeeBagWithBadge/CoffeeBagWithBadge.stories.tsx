import { Story, Meta } from '@storybook/react';
import {
  CoffeeBagWithBadge,
  CoffeBagWithBadgeProps,
} from './CoffeeBagWithBadge';

export default {
  component: CoffeeBagWithBadge,
  title: 'CoffeBagWithBadge',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CoffeBagWithBadgeProps> = (args) => (
  <CoffeeBagWithBadge {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  BadgeProps: {
    badgeContent: 1,
  },
};
