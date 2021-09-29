import { Story, Meta } from '@storybook/react';
import { TestimonialSlider, TestimonialSliderProps } from './TestimonialSlider';

export default {
  component: TestimonialSlider,
  title: 'TestimonialSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<TestimonialSliderProps> = (args) => (
  <TestimonialSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  testimonials: [
    {
      alt: 'alt text',
      attestantLocation: 'São Paulo/SP',
      attestantName: 'Rafaela Souza',
      attestantSocial: '@rafaela',
      src: 'https://via.placeholder.com/1500',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae ducimus perferendis mollitia quibusdam, commodi porro tempore similique provident earum laboriosam dolorum harum inventore fugiat, nemo ad consequuntur repellendus nihil cum magnam ipsam ',
    },
    {
      alt: 'alt text',
      attestantLocation: 'Rio de Janeiro/RJ',
      attestantName: 'Paulo Freitas',
      attestantSocial: '@paulo',
      src: 'https://via.placeholder.com/2000',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae ducimus perferendis mollitia quibusdam, commodi porro tempore similique',
    },
  ],
};
