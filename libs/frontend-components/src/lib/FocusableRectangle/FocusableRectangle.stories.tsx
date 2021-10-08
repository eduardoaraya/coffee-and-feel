import { Story, Meta } from '@storybook/react';
import {
  FocusableRectangle,
  FocusableRectangleProps,
} from './FocusableRectangle';

export default {
  component: FocusableRectangle,
  title: 'FocusableRectangle',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilPhone1',
    },
  },
} as Meta;

const Template: Story<FocusableRectangleProps> = (args) => (
  <FocusableRectangle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
