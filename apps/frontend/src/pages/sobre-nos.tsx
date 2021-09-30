import React from 'react';
import {
  AboutUsPage as AboutUsPageComponent,
  AboutUsPageProps as AboutUsPageComponentProps,
} from '@atlascode/coffee-front-pages';
import { Page } from '../../types';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';

type AboutUsPageProps = AboutUsPageComponentProps;

const AboutUsPage: Page<AboutUsPageProps> = (props) => {
  return (
    <AboutUsPageComponent
      className="page"
      GallerySliderSectionProps={{ list: galleryPhotos }}
      OurHistorySectionProps={{
        photo: {
          src: 'https://via.placeholder.com/700',
          alt: 'Alt text, change me',
        },
      }}
      BannerProps={{
        items: [
          {
            desktopURL: 'imgs/about-us-banner.webp',
            mobileURL: 'https://via.placeholder.com/750',
          },
        ],
        SwiperProps: {
          enabled: false,
        },
      }}
    />
  );
};

export default AboutUsPage;

const galleryPhotos = [
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  { src: 'https://via.placeholder.com/1500', alt: 'an image' },
];

AboutUsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
