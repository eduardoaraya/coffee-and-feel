import { Box, TextField, Button } from '@material-ui/core';
import { FormGrid } from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileMyAccountProps {}

export const ProfileMyAccount: React.FC<ProfileMyAccountProps> = (
  props
): JSX.Element => (
  <FormGrid
    actionsArea={
      <Box className="actions">
        <Button>Voltar</Button>
        <Button color="primary" variant="contained">
          Atualizar
        </Button>
      </Box>
    }
  >
    <Box className="form-field">
      <TextField hiddenLabel label="Nome" defaultValue="" variant="outlined" />
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
      <TextField hiddenLabel label="CPF" defaultValue="" variant="outlined" />
    </Box>
  </FormGrid>
);

export default ProfileMyAccount;
