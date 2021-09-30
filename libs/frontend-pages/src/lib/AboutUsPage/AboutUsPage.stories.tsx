import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import { Story, Meta } from '@storybook/react';
import { AboutUsPage, AboutUsPageProps } from './AboutUsPage';

export default {
  component: AboutUsPage,
  title: 'AboutUsPage',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <LayoutEcommerce>
        <Story />
      </LayoutEcommerce>
    ),
  ],
} as Meta;

const Template: Story<AboutUsPageProps> = (args) => <AboutUsPage {...args} />;

const list = [
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
];

export const Primary = Template.bind({});
Primary.args = {
  BannerProps: {
    items: [
      {
        desktopURL: 'imgs/about-us-banner.webp',
        mobileURL: 'https://via.placeholder.com/750',
      },
    ],
    SwiperProps: {
      enabled: false,
    },
  },

  GallerySliderSectionProps: {
    list: list,
  },
};
