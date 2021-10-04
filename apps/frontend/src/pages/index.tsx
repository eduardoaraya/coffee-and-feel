/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ReactElement } from 'react';
import {
  HomePage,
  HomePageProps as HomePageComponentProps,
} from '@atlascode/coffee-front-pages';
import {
  BannerProps,
  LayoutEcommerce,
} from '@atlascode/coffee-front-components';
import type { Page } from '../../types';

interface HomePageProps extends HomePageComponentProps {}

export const Index: Page<HomePageProps> = ({
  BannerProps = {
    items: BannerList,
  },
}) => {
  return (
    <HomePage
      SubscriptionClubAboutSectionProps={contentSubscriptionClubAboutSection}
      BannerProps={BannerProps}
    />
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};

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

const contentSubscriptionClubAboutSection = {
  sectionTitle: `Como funciona o nosso
  Clube de Assinatura?`,
  backgroundImage: {
    desktop: 'url(/imgs/about-subscription-club.png)',
    mobile: 'url(imgs/about-subscription-club-mobile.png)',
  },
  cardsContent: [
    {
      title: `Assinatura`,
      description: `Escolha o plano
      que mais
      combina com você`,
    },
    {
      title: `Benefícios`,
      description: ` Todos mês, receba
      em casa cafés
      selecionados`,
    },
    {
      title: `Assinatura`,
      description: `Escolha o plano
      que mais
      combina com você`,
    },
  ],
};
