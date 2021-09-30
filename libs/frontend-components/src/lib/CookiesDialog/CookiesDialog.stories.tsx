import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import { CookiesDialog, CookiesDialogProps } from './CookiesDialog';

export default {
  component: CookiesDialog,
  title: 'CookiesDialog',
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
          height: '75vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<CookiesDialogProps> = (args) => (
  <CookiesDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Seus dados estão em segurança e utilizamos cookies para fornecer uma experiência melhor durante a navegação.',
};
