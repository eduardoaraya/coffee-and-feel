import { Page } from '../../types';
import React from 'react';
import {
  SubscriptionPage as SubscriptionPageComponent,
  SubscriptionPageProps as SubscriptionPageComponentProps,
} from '@atlascode/coffee-front-pages';
import {
  LayoutEcommerce,
  SubscriptionItemProps,
} from '@atlascode/coffee-front-components';
import {
  CoffeeBagSVG,
  DeliveryTimeSVG,
  DiscountSVG,
} from '@atlascode/coffee-frontend-svg';
import { LocationOn } from '@material-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SubscriptionPageProps extends SubscriptionPageComponentProps {}

const SubscriptionPage: Page<SubscriptionPageProps> = (
  props: SubscriptionPageProps
) => {
  return (
    <SubscriptionPageComponent
      accordions={accordions}
      subscriptionPlansList={plansBenefits}
      subscriptionBenefits={benefits}
      testimonials={testimonials}
      subscriptionCategories={plans}
      BannerProps={{
        items: [
          {
            desktopURL: 'imgs/clube-assinatura-page-banner-img.png',
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

export default SubscriptionPage;

SubscriptionPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};

const benefits = [
  {
    categoryLabel: 'Standard',
    benefits: [
      { caption: '60 capsulas de cafés selecionados', icon: CoffeeBagSVG },
      { caption: '10% OFF em toda loja', icon: DiscountSVG },
      { caption: '100% de desconto no frete', icon: DeliveryTimeSVG },
    ],
  },
  {
    categoryLabel: 'Premium',
    benefits: [
      { caption: '40 capsulas de cafés selecionados', icon: CoffeeBagSVG },
      { caption: '50% de desconto no frete', icon: DeliveryTimeSVG },
    ],
  },
];

const subscriptionProps: SubscriptionItemProps = {
  title: 'Edição Mirabilis Café Suave',
  sx: {
    bgcolor: 'transparent',
  },
  attributes: [
    {
      title: 'Origem',
      icon: LocationOn,
      info: 'Pedra azul - Espírito Santo',
    },
    {
      title: 'Origem',
      icon: LocationOn,
      info: 'Pedra azul - Espírito Santo',
    },
    {
      title: 'Origem',
      icon: LocationOn,
      info: 'Pedra azul - Espírito Santo',
    },
    {
      title: 'Origem',
      icon: LocationOn,
      info: 'Pedra azul - Espírito Santo',
    },
  ],
  description:
    'Falar de café é falar de amor, tradição, e sensação de lar. Muitos de nós trazemos na bagagem histórias incríveis que envolvem essa bebida especial. Seja por resgate a alguma memória, um sabor inesquecível ou até mesmo uma experiência não tão boa assim,',
  src: 'imgs/coffee-package.png',
  alt: 'This is an alt text',
  activeIndex: 0,
  amount: 5,
};

const plans = [
  {
    uniqueID: 'monthly-slider-1',
    categoryLabel: 'Mensal',
    items: [
      subscriptionProps,
      {
        ...subscriptionProps,
        activeIndex: 1,
        title: 'Edição Adsumus Conillon',
      },
      {
        ...subscriptionProps,
        activeIndex: 2,
        title: 'Lorem ipsum Coffee Title',
      },
    ],
  },
  {
    uniqueID: 'yearly-slider-1',
    categoryLabel: 'Anual',
    items: [
      subscriptionProps,
      {
        ...subscriptionProps,
        activeIndex: 1,
        title: 'Edição Adsumus Conillon',
      },
      {
        ...subscriptionProps,
        activeIndex: 2,
        title: 'Lorem ipsum Coffee Title',
      },
    ],
  },
];

const testimonials = [
  {
    alt: 'alt text',
    attestantLocation: 'São Paulo/SP',
    attestantName: 'Rafaela Souza',
    attestantSocial: '@rafaela',
    src: 'https://via.placeholder.com/1500',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae ducimus perferendis mollitia quibusdam, commodi porro tempore similique provident earum laboriosam dolorum harum inventore fugiat, nemo ad consequuntur repellendus nihil cum magnam ipsam ',
  },
  {
    alt: 'alt text',
    attestantLocation: 'Rio de Janeiro/RJ',
    attestantName: 'Paulo Freitas',
    attestantSocial: '@paulo',
    src: 'https://via.placeholder.com/2000',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae ducimus perferendis mollitia quibusdam, commodi porro tempore similique',
  },
];
const mockPlan = {
  categoryLabel: 'Premium',
  title: 'Premium',
  caption: 'Você recebe 60 cápsulas todos os meses',
  price: 'R$ 132,60/mês',
  benefits: [
    'Café Blend Suave',
    'Café Blend Intenso',
    'Café Conillon',
    'Desconto de 10% em toda loja',
    'Café maceração carbônica',
    '100% OFF no frete',
    'Café Orgânico Biodinâmico',
  ],
};
const plansBenefits = [
  {
    categoryLabel: 'Mensal',
    plan: [mockPlan, { ...mockPlan, title: 'Standard' }],
  },
  {
    categoryLabel: 'Semestral',
    plan: [mockPlan, { ...mockPlan, title: 'Standard' }],
  },
];

const accordions = [
  {
    title: 'FAQ',
    content: 'lorem ipsum',
  },
  {
    title: 'FAQ',
    content: 'lorem ipsum',
  },
  {
    title: 'FAQ',
    content: 'lorem ipsum',
  },
  {
    title: 'FAQ',
    content: 'lorem ipsum',
  },
  {
    title: 'FAQ',
    content: 'lorem ipsum',
  },
];
