import { Box, TextField, Button } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileMyAccountProps {}

export const ProfileMyAccount: React.FC<ProfileMyAccountProps> = (
  props
): JSX.Element => (
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
        <Box className="form-field">
          <TextField
            hiddenLabel
            label="Nome"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            hiddenLabel
            label="Sobrenome"
            defaultValue=""
            variant="outlined"
          />
        </Box>
        <Box className="form-field">
          <TextField
            hiddenLabel
            label="E-mail"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            hiddenLabel
            label="Telefone"
            defaultValue=""
            variant="outlined"
          />
        </Box>
        <Box className="form-field">
          <TextField
            hiddenLabel
            label="Data de nascimento"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            hiddenLabel
            label="CPF"
            defaultValue=""
            variant="outlined"
          />
        </Box>
        <Box className="action">
          <Button>Voltar</Button>
          <Button color="primary" variant="contained">
            Atualizar
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ProfileMyAccount;
