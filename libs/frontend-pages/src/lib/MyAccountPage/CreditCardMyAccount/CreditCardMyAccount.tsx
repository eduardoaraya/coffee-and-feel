import { ChangeEvent, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import {
  CreditCardFormFields,
  CreditCardFormInterface,
  CreditCardInterface,
  CreditCardList,
  CreditCardView,
} from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreditCardMyAccountProps {}

const cardDefaultData: CreditCardFormInterface = {
  id: '',
  foursLastNumbers: '',
  fullname: '',
  cardNumber: '',
  validity: '',
  securityCode: '',
};

export const CreditCardMyAccount: React.FC<CreditCardMyAccountProps> =
  (): JSX.Element => {
    const [mode, setMode] = useState<'new' | 'edit' | 'list'>('new');
    const [cardList, setCardList] = useState<CreditCardInterface[]>([]);
    const [cardData, setCardData] =
      useState<CreditCardFormInterface>(cardDefaultData);
    const [flip, setFlip] = useState<boolean>(false);

    const mustFlip = (name: string): boolean => name === 'securityCode';

    const changeCredCardFormField = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        type TargetType = EventTarget &
          HTMLInputElement & {
            name: keyof CreditCardFormInterface;
          };
        const { name, value } = event.target as TargetType;
        setFlip(mustFlip(name));
        if (name && value) {
          setCardData({
            ...cardData,
            [name]: value,
          });
          return;
        }
        setCardData(cardDefaultData);
      },
      [cardData]
    );

    const create = () => {
      setMode('list');
      setCardList([...cardList, cardData]);
    };

    return (
      <Box sx={getDefaultStyle()}>
        {mode === 'new' ? (
          <>
            <Box
              component="form"
              onSubmit={() => create()}
              className="credit-card-form"
            >
              <CreditCardFormFields
                onChangeField={changeCredCardFormField}
                defaultData={cardDefaultData}
                actions={
                  <Box className="actions">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setMode('list');
                      }}
                      type="button"
                    >
                      Voltar
                    </Button>
                    <Button variant="contained" type="submit">
                      Cadastrar
                    </Button>
                  </Box>
                }
              />
            </Box>
            <Box className="credit-card-view">
              <CreditCardView
                CardNumberFieldProps={{
                  value: cardData.cardNumber,
                  disabled: true,
                  name: 'cardNumber',
                  InputLabelProps: {
                    shrink: true,
                  },
                }}
                CardNameFieldProps={{
                  value: cardData.fullname,
                  disabled: true,
                  name: 'fullname',
                  InputLabelProps: {
                    shrink: true,
                  },
                }}
                CardExpiryDateFieldProps={{
                  value: cardData.validity,
                  disabled: true,
                  name: 'validity',
                  InputLabelProps: {
                    shrink: true,
                  },
                }}
                CardCVVFieldProps={{
                  value: cardData.securityCode,
                  disabled: true,
                  name: 'securityCode',
                }}
                flip={flip}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Salvar esta cartão"
                />
              </FormGroup>
            </Box>
          </>
        ) : (
          <CreditCardList
            actions={
              <Button onClick={() => setMode('new')} variant="contained">
                Adicionar novo endereço
              </Button>
            }
            cardList={cardList}
          />
        )}
      </Box>
    );
  };

export default CreditCardMyAccount;

const getDefaultStyle = () =>
  ({
    position: 'relative',
    display: 'flex',
    '&, .credit-card-form': {
      height: '100%',
    },
    '.credit-card-view': {
      padding: '40px 20px',
    },
  } as SxProps<Theme>);
