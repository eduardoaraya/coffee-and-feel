import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { LoadingButton, LoadingButtonProps } from '@material-ui/lab';

/* eslint-disable-next-line */
export interface InputWithButtonProps extends BoxProps {
  InputProps?: BoxProps<'input'>;
  ButtonProps?: LoadingButtonProps;
}

export function InputWithButton({
  sx,
  InputProps,
  ButtonProps,
  ...rest
}: InputWithButtonProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box
        {...InputProps}
        component="input"
        type="email"
        placeholder="Seu e-mail"
        sx={styles.input}
      />
      <LoadingButton
        {...ButtonProps}
        disableElevation
        sx={styles.button}
        size="medium"
        variant="contained"
      >
        Enviar
      </LoadingButton>
    </Box>
  );
}

export default InputWithButton;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '325px',
    height: { xs: '4em' },
  },

  input: {
    flex: 1,
    height: '100%',
    outline: 'none',
    borderRadius: '8px 0 0 8px',
    background: '#FFF',
    padding: '0 8px',
    border: (theme) => `2px solid ${theme.palette.primary.main}`,
    '&::placeholder': {
      textIndent: '20px',
      color: (theme) => theme.palette.secondary.main,
    },
  },

  button: {
    height: '100%',
    borderRadius: '0 8px 8px 0',
    transform: 'translate3d(-2px, 0, 0)',
  },
});
