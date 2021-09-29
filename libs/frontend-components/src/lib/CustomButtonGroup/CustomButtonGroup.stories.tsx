import { Story, Meta } from '@storybook/react';
import { CustomButtonGroup, CustomButtonGroupProps } from './CustomButtonGroup';

export default {
  component: CustomButtonGroup,
  title: 'CustomButtonGroup',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CustomButtonGroupProps> = (args) => (
  <CustomButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  buttons: [
    {
      children: 'Hello world',
      onClick: () => console.log('clicked 0 index'),
    },
    {
      children: 'Hello earth',
      onClick: () => console.log('clicked 1 index'),
    },
  ],
} as CustomButtonGroupProps;
