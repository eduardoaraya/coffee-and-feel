import { Story, Meta } from '@storybook/react';
import { FAQSection, FAQSectionProps } from './FAQSection';

export default {
  component: FAQSection,
  title: 'FAQSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<FAQSectionProps> = (args) => <FAQSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  accordions: [
    {
      title: 'FAQ',
      content: 'lorem ipsum',
    },
    {
      title: 'FAQ',
      content: 'lorem ipsum',
    },
    {
      title: 'FAQ',
      content: 'lorem ipsum',
    },
    {
      title: 'FAQ',
      content: 'lorem ipsum',
    },
    {
      title: 'FAQ',
      content: 'lorem ipsum',
    },
  ],
};
