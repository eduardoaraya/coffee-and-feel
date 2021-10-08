import { Button, Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import { EnhancedRadio, EnhancedRadioProps } from './EnhancedRadio';

export default {
  component: EnhancedRadio,
  title: 'Inputs/EnhancedRadio',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<EnhancedRadioProps> = (args) => (
  <EnhancedRadio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: false,
};
Primary.storyName = 'No content';

export const Secondary = Template.bind({});
Secondary.storyName = 'Content being passed';
Secondary.args = {
  children: (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        p: 2,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 900,
        fontSize: '12px',
      }}
    >
      Hello, im being passed to the content property as a JSX Element
    </Box>
  ),
};

export const Tertiary = Template.bind({});
Tertiary.storyName = 'Elaborated content';
Tertiary.args = {
  active: false,
  children: (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: { xs: '1.5em' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: { xs: '2em' },
          pl: { xs: '0.75em' },
        }}
      >
        <Box sx={{ fontSize: '12px', fontWeight: 800 }}>Endereço</Box>
        <Box sx={{ fontSize: '10px', maxWidth: { xs: '32ch' } }}>
          Rua das Andradas, 4353 - Centro Histórico - Porto Alegre/RS
        </Box>
      </Box>

      <Button
        sx={{
          borderRadius: '6px',
          maxWidth: 'fit-content',
          fontSize: '10px !important',
        }}
        color="secondary"
        variant="outlined"
        size="small"
      >
        Mudar endereço
      </Button>
    </Box>
  ),
};
