import { Story, Meta } from '@storybook/react';
import { FAQSection, FAQSectionProps } from './FAQSection';

export default {
  component: FAQSection,
  title: 'FAQSection',
} as Meta;

const Template: Story<FAQSectionProps> = (args) => <FAQSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  accordions: [
    {
      title: 'Hello world',
      content: 'lorem ipsum',
    },
    {
      title: 'Hello world',
      content: 'lorem ipsum',
    },
    {
      title: 'Hello world',
      content: 'lorem ipsum',
    },
    {
      title: 'Hello world',
      content: 'lorem ipsum',
    },
    {
      title: 'Hello world',
      content: 'lorem ipsum',
    },
  ],
};
