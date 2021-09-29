import { Story, Meta } from '@storybook/react';
import {
  SubscriptionSlider,
  SubscriptionSliderProps,
} from './SubscriptionSlider';
import { SubscriptionItemProps } from '../SubscriptionItem/SubscriptionItem';
import { LocationOn } from '@material-ui/icons';
import { Box } from '@material-ui/system';

export default {
  component: SubscriptionSlider,
  title: 'SubscriptionSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2 }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<SubscriptionSliderProps> = (args) => (
  <SubscriptionSlider {...args} />
);
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
export const Primary = Template.bind({});
Primary.args = {
  items: [
    { ...subscriptionProps },
    { ...subscriptionProps, activeIndex: 1, title: 'Edição Adsumus Conillon' },
  ],
};
