import { Story, Meta } from '@storybook/react';
import { CookiesDialog, CookiesDialogProps } from './CookiesDialog';

export default {
  component: CookiesDialog,
  title: 'CookiesDialog',
} as Meta;

const Template: Story<CookiesDialogProps> = (args) => (
  <CookiesDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
