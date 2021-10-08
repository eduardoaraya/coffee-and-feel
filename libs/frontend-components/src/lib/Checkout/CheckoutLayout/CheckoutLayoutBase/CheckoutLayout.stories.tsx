import { Story, Meta } from '@storybook/react';
import { CheckoutLayout, CheckoutLayoutProps } from './CheckoutLayout';
import { CheckoutItemProps } from '../../CheckoutSummary/CheckoutSummaryItem/CheckoutSummaryItem';
import { CheckoutAddressCreation } from '../CheckoutAddressCreation/CheckoutAddressCreation';
import { CheckoutCreditCardCreation } from '../CheckoutCreditCardCreation/CheckoutCreditCardCreation';
import CheckoutPaymentSelection from '../CheckoutPaymentSelection/CheckoutPaymentSelection';
import CheckoutCreditCardPayment from '../CheckoutCreditCardPayment/CheckoutCreditCardPayment';
import CheckoutSubscriptionType from '../CheckoutSubscriptionType/CheckoutSubscriptionType';
import CheckoutSubscriptionCoffee, {
  SlotList,
} from '../CheckoutSubscriptionCoffee/CheckoutSubscriptionCoffee';
import { MenuItem } from '@material-ui/core';
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

export const Senary = Template.bind({});
Senary.storyName = 'Credit Card Payment';
Senary.args = {
  ...Primary.args,
  activeStep: 2,
  children: (
    <CheckoutCreditCardPayment
      CreditCardRectangleProps={{
        CCBrand: 'VISA',
        CCNumber: '****5566',
        active: true,
      }}
      JSS={{ root: { px: { xs: 0.5, lg: 5 } } }}
    />
  ),
};

export const Septary = Template.bind({});
Septary.args = {
  ...Primary.args,
  activeStep: 1,
  steps: ['Identificação', 'Plano', 'Cafés', 'Endereço', 'Pagamento'],
  children: (
    <CheckoutSubscriptionType
      JSS={{ root: { p: { xs: '1em', lg: 5 } } }}
      subscriptions={[
        {
          categoryLabel: 'Mensal',
          subscriptions: [
            { label: 'Assinatura standard', active: true, price: 55 },
            { label: 'Assinatura premium', active: false, price: 120 },
          ],
        },
        {
          categoryLabel: 'Semestral',
          subscriptions: [
            { label: 'Assinatura standard', active: false, price: 800 },
            { label: 'Assinatura premium', active: true, price: 9001 },
          ],
        },
      ]}
    />
  ),
};
Septary.storyName = 'Subscription Selection';

const coffeSelectList = [
  <MenuItem value="Café 1"> Café 1 </MenuItem>,
  <MenuItem value="Café 2"> Café 2 </MenuItem>,
  <MenuItem value="Café 3"> Café 3 </MenuItem>,
  <MenuItem value="Café 4"> Café 4 </MenuItem>,
];

const coffeListProps: SlotList = {
  label: 'Café especiais 1',
  slots: [
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
    {
      select: true,
      label: 'Selecione seus cafés',
      children: coffeSelectList,
    },
  ],
};

export const Octonary = Template.bind({});
Octonary.args = {
  ...Septary.args,
  children: (
    <CheckoutSubscriptionCoffee
      title="Você receberá 10 cápsulas de cada café selecionado"
      JSS={{ root: { px: { xs: 1.25, sm: 4, lg: 5 }, pb: { xs: 5 } } }}
      list={[
        { ...coffeListProps },
        { ...coffeListProps, label: 'Cafés especiais 2' },
        { ...coffeListProps, label: 'Cafés especiais 3' },
      ]}
    />
  ),
};
Octonary.storyName = 'Subscription Coffee Slot selection';
