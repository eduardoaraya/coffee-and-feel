import { BannerProps } from '@atlascode/coffee-front-components';
import { Story, Meta } from '@storybook/react';
import { HomePage, HomePageProps } from './HomePage';

const BannerList: BannerProps['items'] = [
  {
    desktopURL:
      'https://http2.mlstatic.com/D_NQ_755507-MLA47264929743_082021-OO.webp',
    mobileURL: 'https://miro.medium.com/max/1280/0*lKSW0AQyeqr6MeGt.jpg',
  },

  {
    desktopURL:
      'https://http2.mlstatic.com/D_NQ_894709-MLA47263975191_082021-OO.webp',
    mobileURL:
      'https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg',
  },
];

export default {
  component: HomePage,
  title: 'HomePage',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  BannerProps: {
    items: BannerList,
  },
};
