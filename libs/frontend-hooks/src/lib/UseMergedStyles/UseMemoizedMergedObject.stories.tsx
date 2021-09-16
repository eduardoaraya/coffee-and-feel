import { Story, Meta } from '@storybook/react';
import { useMemoizedMergedObject } from './UseMemoizedMergedObject';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DemoProps {}

const Demo = (props: DemoProps) => {
  return <div>Hello world</div>;
};

export default {
  component: Demo,
  title: 'UseMergedStyles',
} as Meta;

const Template: Story<DemoProps> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
