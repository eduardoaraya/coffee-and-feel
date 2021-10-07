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
      SubscriptionClubDetailsSectionProps={contentPlans}
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

const contentPlans = {
  plans: [
    {
      id: 1,
      title: 'Standard',
      subtitle: 'Você recebe 40 cápsulas todos os meses',
      priceText: 'R$ 71,60/mês',
      priceInfo: '+ taxa de entrega',
      content: [
        'Café Blend Suave',
        'Café Blend Intenso',
        'Café Conillon',
        'Desconto de 10% em toda loja',
        'Acumule o dobro de Feel Points',
      ],
    },
    {
      id: 2,
      title: 'Premium',
      subtitle: 'Você recebe 60 cápsulas todos os meses',
      priceText: 'R$ 132,60/mês',
      content: [
        'Café Blend Suave',
        'Café Blend Intenso',
        'Café Conillon',
        'Café Orgânico Biodinâmico',
        'Desconto de 20% em toda loja',
        'Frete 50% OFF em toda loja',
        'Acumule o triplo de Feel Points',
      ],
    },
  ],
};
