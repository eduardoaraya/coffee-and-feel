/* eslint-disable @typescript-eslint/no-empty-interface */
import { SubscriptionItemProps } from '@atlascode/coffee-front-components';
import { SubscriptionCoffeeList } from '@atlascode/coffee-front-sections';
import { LocationOn } from '@material-ui/icons';
import React from 'react';

interface Props {}

const Test = (props: Props) => {
  return <SubscriptionCoffeeList plans={plans} />;
};

export default Test;

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
