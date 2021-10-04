import { Box, Radio, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { SxProps, Theme } from '@material-ui/system';
import { CreditCardInterface } from '../Contracts/CreditCardInterface';
import { ListingWithAction } from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreditCardListProps {
  cardList: CreditCardInterface[];
  actions: JSX.Element;
}

export const CreditCardList: React.FC<CreditCardListProps> = ({
  cardList,
  actions,
}): JSX.Element => (
  <Box sx={getDefaultStyle()}>
    <Box className="actions">{actions}</Box>
    <Box className="card-content">
      <Typography fontWeight="bolder">Cartões cadastrados</Typography>
      <ListingWithAction
        emptyListMessage="Nenhum cartão cadastrado."
        data={cardList.map(({ id, foursLastNumbers }, key) => ({
          leftSide: <Radio checked={key === 1 ? true : false} />,
          id: key,
          label: `FLAG *** ${foursLastNumbers}`,
          active: key === 0,
          actions: [
            {
              icon: <Delete />,
              onClick: () => console.log('delete'),
            },
          ],
        }))}
      />
    </Box>
  </Box>
);

export default CreditCardList;

export const getDefaultStyle = () =>
  ({
    width: '100%',
    height: '100%',
    '.actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '.card-content': {
      padding: '20px',
      '.listing-with-actions': {
        paddingRight: '20px',
        maxWidth: '570px',
        maxHeight: '400px',
        overflowY: 'scroll',
      },
    },
  } as SxProps<Theme>);
