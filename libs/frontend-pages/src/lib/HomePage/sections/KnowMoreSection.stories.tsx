import { Story, Meta } from '@storybook/react';
import { KnowMoreSection } from './KnowMoreSection';

export default {
  component: KnowMoreSection,
  title: 'KnowMoreSection',
} as Meta;

const Template: Story<> = (args) => <KnowMoreSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
