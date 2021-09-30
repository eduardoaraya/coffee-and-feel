import { Story, Meta } from '@storybook/react';
import { MobileMenu, MobileMenuProps } from './MobileMenu';

export default {
  component: MobileMenu,
  title: 'MobileMenu',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilPhone1',
    },
  },
} as Meta;

const Template: Story<MobileMenuProps> = (args) => <MobileMenu {...args} />;

const mockHandler = () => console.log('I was clicked');

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  items: [
    { label: 'Minha conta', action: mockHandler },
    { label: 'Sobre nós', action: mockHandler },
    { label: 'Clube de assinatura', action: mockHandler },
    { label: 'Produtos', action: mockHandler },
    { label: 'Blog', action: mockHandler },
  ],
};
