import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import {
  SubscriptionBenefitsListCard,
  SubscriptionBenefitsListCardProps,
} from './SubscriptionBenefitsListCard';

export default {
  component: SubscriptionBenefitsListCard,
  title: 'Subscription/SubscriptionBenefitsListCard',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: '20px' }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<SubscriptionBenefitsListCardProps> = (args) => (
  <SubscriptionBenefitsListCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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
