import { Box, Typography, Paper, Button, Tooltip } from '@material-ui/core';
import { Check, HelpOutline } from '@material-ui/icons';
import { alpha, SxProps, Theme } from '@material-ui/system';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SubscriptionsMyAccountProps {
  subscriptionsDetails?: unknown;
}

export const SubscriptionsMyAccount: React.FC<SubscriptionsMyAccountProps> = ({
  subscriptionsDetails,
}): JSX.Element =>
  subscriptionsDetails ? (
    <Box className="wrapper" sx={getDefaultStyles()}>
      <Box className="content-header">
        <Typography variant="h2">Assinatura Premium</Typography>
      </Box>
      <Box className="content-main">
        <Box className="content-row">
          <Box className="product-list">
            <Typography className="product-list-title">
              Cafes especiais 1
            </Typography>
            {Array.from({ length: 4 }).map((item, key) => (
              <Box className="item" key={key}>
                <Typography>Product {key}</Typography>
                <Check color="success" />
              </Box>
            ))}
          </Box>
          <Box className="product-list">
            <Typography className="product-list-title">
              Cafes especiais 2
            </Typography>
            {Array.from({ length: 4 }).map((item, key) => (
              <Box className="item" key={key}>
                <Typography>Product {key}</Typography>
                <Check color="success" />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="actions">
          <Tooltip title="Você pode mudar os cafés que irá receber na próxima entrega.">
            <Button className="btn-changecoffee">
              <Typography className="action-message" color="primary">
                Mudar meus cafés
              </Typography>
              <HelpOutline className="icon" color="secondary" />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        '&.content-message': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '.wrapper-message ': {
            padding: '20px 45px',
            '.message': {
              fontSize: '1.85em',
              maxWidth: '350px',
              marginBottom: '15px',
            },
          },
        },
      }}
      className="content-message"
    >
      <Box className="wrapper-message">
        <Typography className="message">
          Você ainda não fez nenhuma assinatura.
        </Typography>
        <Button className="btn-subscription" variant="contained" size="large">
          Conhecer o Clube
        </Button>
      </Box>
    </Box>
  );

export default SubscriptionsMyAccount;

const getDefaultStyles = () =>
  ({
    '&.wrapper': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      '.content-main': {
        '.content-row': {
          display: 'flex',
          width: '100%',
          height: '100%',
          '.product-list': {
            marginTop: '35px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 20px',
            '.product-list-title': {
              margin: '10px 0px',
              fontSize: '1.2em',
            },
            '.item': {
              userSelect: 'none',
              transition: '.3s',
              display: 'flex',
              alihnItem: 'center',
              justifyContent: 'space-between',
              padding: '10px 20px',
              marginTop: '15px',
              boxShadow: '2px 2px 5px -1px rgba(52, 52, 52, 0.12)',
              cursor: 'pointer',
              ':hover': {
                background: (theme) => alpha(theme.palette.secondary.main, 0.1),
              },
            },
          },
        },

        '.actions': {
          padding: '10px 20px',
          '.btn-changecoffee': {
            textTransform: 'none',
            '.icon': {
              marginLeft: '7px',
            },
          },
        },
      },
    },
  } as SxProps<Theme>);
