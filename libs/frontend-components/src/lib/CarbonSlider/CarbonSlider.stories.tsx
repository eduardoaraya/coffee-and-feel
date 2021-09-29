import { BoxProps, Box } from '@material-ui/core';

import { Story, Meta } from '@storybook/react';
import { CarbonSlider, CarbonSliderProps } from './CarbonSlider';

export default {
  component: CarbonSlider,
  title: 'CarbonSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          p: 2,
          mt: { lg: 4 },
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story<CarbonSliderProps<BoxProps>> = (args) => (
  <CarbonSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  SwiperProps: {
    loop: true,
  },
  component: Box,
  list: [
    {
      children: 'hello world',
      sx: { bgcolor: 'violet', width: '150px', height: '150px', color: '#fff' },
    },
    {
      children: 'hello mars',
      sx: { bgcolor: 'violet', width: '250px', height: '150px', color: '#fff' },
    },
  ],
};
