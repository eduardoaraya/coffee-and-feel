import { SxProps, Theme } from '@material-ui/system';

export type ProductCatalogRepresentationType = {
  [key: string]: SxProps<Theme>;
};

export default {
  productRepresentation: {
    '.product-info': {
      width: '100%',
      height: '100%',
    },
    '.product-title': {
      display: 'flex',
      flexDirection: 'column',
      h2: {
        fontSize: '1.9em',
      },
    },
    '.label-feel-points': {
      margin: '15px 0',
    },
    '.product-price-info': {
      padding: '30px 0',
    },
    '.MuiButtonGroup-root': {
      maxWidth: '275px',
      margin: '10px 0px',
    },
    '.MuiIconButton-root': {
      width: '61px',
      height: '61px',
      marginLeft: '10px',
      background: (theme) => theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.actions': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  },
} as ProductCatalogRepresentationType;
