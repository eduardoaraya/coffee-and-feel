import { Box, TextField, Button } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormLayoutProps {
  actions: JSX.Element[];
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  actions,
}): JSX.Element => (
  <Box
    className="wrapper"
    sx={{
      width: '100%',
      height: '100%',
      '.form': {
        height: '100%',
        '.form-wrapper': {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          '.form-field': {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: '20px',
            '.MuiFormControl-root': {
              flex: 1,
              maxWidth: '100%',
              width: '100%',
              margin: '20px',
            },
          },
        },
      },
      '.action': {
        paddingTop: '75px',
        button: {
          marginRight: '20px',
        },
      },
    }}
  >
    <Box component="form" className="form">
      <Box className="form-wrapper">
        {children}
        <Box className="action">{actions}</Box>
      </Box>
    </Box>
  </Box>
);

export default FormLayout;
