import { Story, Meta } from '@storybook/react';
import { CheckoutLayout, CheckoutLayoutProps } from './CheckoutLayout';
import { CheckoutItemProps } from '../../CheckoutSummary/CheckoutSummaryItem/CheckoutSummaryItem';
import { CheckoutAddressCreation } from '../CheckoutAddressCreation/CheckoutAddressCreation';
import { CheckoutCreditCardCreation } from '../CheckoutCreditCardCreation/CheckoutCreditCardCreation';
import CheckoutPaymentSelection from '../CheckoutPaymentSelection/CheckoutPaymentSelection';
export default {
  component: CheckoutLayout,
  title: 'Checkout/Checkout Layout/CheckoutLayout',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutLayoutProps> = (args) => (
  <CheckoutLayout {...args} />
);

const checkoutItem: CheckoutItemProps = {
  img: {
    src: 'imgs/coffee-package.png',
    alt: 'This is an alt text',
  },
  title:
    ' Café expresso edição especial - 30 cápsulas aloha awooogaaaaa hello world',
  price: 15,
};

export const Primary = Template.bind({});
Primary.args = {
  steps: ['Identificação', 'Entrega', 'Pagamento'],
  activeStep: 0,
  items: [
    { ...checkoutItem },
    { ...checkoutItem, price: 175 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
  ],
  open: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  open: true,
};
Secondary.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'brazilPhone1',
  },
};
Secondary.storyName = 'Mobile summary menu';

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  children: (
    <CheckoutAddressCreation
      justifySelf={{ xs: 'center', lg: 'flex-start' }}
      pb={3}
    />
  ),
};
Tertiary.storyName = 'Address creation';

export const Quaternary = Template.bind({});
Quaternary.args = {
  ...Primary.args,
  children: <CheckoutCreditCardCreation />,
};
Quaternary.storyName = 'Credit card creation';

export const Quinary = Template.bind({});
Quinary.storyName = 'Payment selection';
Quinary.args = {
  ...Primary.args,
  activeStep: 1,
  children: (
    <CheckoutPaymentSelection
      items={[
        { label: 'VISA ****6345' },
        { label: 'Novo cartão de crédito' },
        { label: 'Paypal' },
        { label: 'Pix' },
        { label: 'Boleto bancário' },
      ]}
      activeIndex={0}
      JSS={{ root: { p: { lg: 5 } }, container: { p: { xs: 2, lg: 0 } } }}
    />
  ),
};
