import { Box, TextField, Button } from '@material-ui/core';
import { FormEvent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormGridProps {
  actionsArea?: JSX.Element;
}

export const FormGrid: React.FC<FormGridProps> = ({
  children,
  actionsArea,
}): JSX.Element => (
  <Box
    className="form-grid"
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      '.form-wrapper': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
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
      '.actions': {
        paddingTop: '75px',
        button: {
          marginRight: '20px',
        },
      },
    }}
  >
    <Box className="form-wrapper">{children}</Box>
    {actionsArea}
  </Box>
);

export default FormGrid;
