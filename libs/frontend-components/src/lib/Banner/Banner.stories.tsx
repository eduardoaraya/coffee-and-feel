import { Story, Meta } from '@storybook/react';
import { Banner } from './Banner';
import { BannerProps } from './contracts/banner.interface';

export default {
  component: Banner,
  title: 'Banner',
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
