import { LocationOn } from '@material-ui/icons';
import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import { SubscriptionItem, SubscriptionItemProps } from './SubscriptionItem';

export default {
  component: SubscriptionItem,
  title: 'SubscriptionItem',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<SubscriptionItemProps> = (args) => (
  <SubscriptionItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  sx: {
    px: { xs: '2em' },
    py: { xs: '2em' },
  },
  title: 'Edição Mirabilis Café Suave',
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
