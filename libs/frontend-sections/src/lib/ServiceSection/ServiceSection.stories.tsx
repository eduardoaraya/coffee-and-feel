import { Story, Meta } from '@storybook/react';
import { ServiceSection, ServiceSectionProps } from './ServiceSection';

export default {
  component: ServiceSection,
  title: 'ServiceSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<ServiceSectionProps> = (args) => (
  <ServiceSection {...args} />
);

export const Primary = Template.bind({});
