import { Story, Meta } from '@storybook/react';
import { CustomDialog, CustomDialogProps } from './CustomDialog';
import { LayoutEcommerce } from '../LayoutEcommerce/LayoutEcommerce';

export default {
  component: CustomDialog,
  title: 'CustomDialog',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <LayoutEcommerce>
        <Story />
      </LayoutEcommerce>
    ),
  ],
} as Meta;

const Template: Story<CustomDialogProps> = (args) => <CustomDialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: false,
};
