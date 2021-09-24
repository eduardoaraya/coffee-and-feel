import { Story, Meta } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/ban-types
type DemoProps = {};

const Demo = () => {
  return <div>Hello Demo</div>;
};

export default {
  component: Demo,
  title: 'UseLoadMore',
} as Meta;

const Template: Story<DemoProps> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
