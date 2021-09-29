import { Story, Meta } from '@storybook/react';
import { MobileMenu, MobileMenuProps } from './MobileMenu';

export default {
  component: MobileMenu,
  title: 'MobileMenu',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<MobileMenuProps> = (args) => <MobileMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
