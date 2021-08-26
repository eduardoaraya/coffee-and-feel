import { Story, Meta } from '@storybook/react';
import {
  FrontendComponents,
  FrontendComponentsProps,
} from './FrontendComponents';

export default {
  component: FrontendComponents,
  title: 'FrontendComponents',
} as Meta;

const Template: Story<FrontendComponentsProps> = (args) => (
  <FrontendComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
