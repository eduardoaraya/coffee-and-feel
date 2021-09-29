import { Story, Meta } from '@storybook/react';
import {
  SubscriptionBenefitsListSection,
  SubscriptionBenefitsListSectionProps,
} from './SubscriptionBenefitsListSection';

export default {
  component: SubscriptionBenefitsListSection,
  title: 'SubscriptionBenefitsListSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionBenefitsListSectionProps> = (args) => (
  <SubscriptionBenefitsListSection {...args} />
);

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

export const Primary = Template.bind({});
Primary.args = {
  plans: [
    {
      categoryLabel: 'Mensal',
      plan: [mockPlan, { ...mockPlan, title: 'Standard' }],
    },
    {
      categoryLabel: 'Semestral',
      plan: [mockPlan, { ...mockPlan, title: 'Standard' }],
    },
    {
      categoryLabel: 'Anual',
      plan: [mockPlan, { ...mockPlan, title: 'Standard' }],
    },
  ],
};
