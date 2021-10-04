import { Box, TextField } from '@material-ui/core';
import { FormGrid } from '../../Layout/FormGrid/FormGrid';
import { CreditCardFormInterface } from '../Contracts/CreditCardInterface';
import { ChangeEventHandler } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreditCardFormFieldsProps {
  actions: JSX.Element;
  defaultData: CreditCardFormInterface;
  onChangeField: ChangeEventHandler<HTMLInputElement>;
}

export const CreditCardFormFields: React.FC<CreditCardFormFieldsProps> = ({
  actions,
  defaultData,
  onChangeField,
}): JSX.Element => {
  return (
    <FormGrid actionsArea={actions}>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Número do cartão"
          variant="outlined"
          name="cardNumber"
          onChange={onChangeField}
          defaultValue={defaultData.cardNumber}
          required
        />
      </Box>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Nome impresso no cartão"
          variant="outlined"
          name="fullname"
          onChange={onChangeField}
          defaultValue={defaultData.fullname}
          required
        />
      </Box>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Validade (mm/aa)"
          variant="outlined"
          name="validity"
          onChange={onChangeField}
          defaultValue={defaultData.validity}
          required
        />
        <TextField
          hiddenLabel
          label="CVV"
          variant="outlined"
          name="securityCode"
          onChange={onChangeField}
          defaultValue={defaultData.securityCode}
          required
        />
      </Box>
    </FormGrid>
  );
};

export default CreditCardFormFields;
