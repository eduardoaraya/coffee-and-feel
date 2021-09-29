import { SubscriptionItemProps } from '@atlascode/coffee-front-components';
import { LocationOn, Star } from '@material-ui/icons';
import { Story, Meta } from '@storybook/react';
import {
  SubscriptionCoffeeList,
  SubscriptionCoffeeListProps,
} from './SubscriptionCoffeeList';

export default {
  component: SubscriptionCoffeeList,
  title: 'SubscriptionCoffeeList',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionCoffeeListProps> = (args) => (
  <SubscriptionCoffeeList {...args} />
);

export const Primary = Template.bind({});

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

Primary.args = {
  plans: [
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
  ],
};
