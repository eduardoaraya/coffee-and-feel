import {
  Button,
  Typography,
  IconButton,
  ButtonGroup,
  Box,
} from '@material-ui/core';
import Image from 'next/image';
import style from './style';

/* eslint-disable-next-line */

type variantView = 'mobile' | 'desktop';
export interface ProductCatalogRepresentationProps {
  variantViewPort?: variantView;
}

const getSizeButton = (
  variant: string
): 'small' | 'medium' | 'large' | undefined =>
  'mobile' === variant ? 'small' : 'large';

export function ProductCatalogRepresentation({
  variantViewPort = 'desktop',
}: ProductCatalogRepresentationProps) {
  return (
    <Box
      component="div"
      className="product-representation"
      sx={style.productRepresentation}
    >
      <Box className="product-title">
        <Typography color="white" variant="h1">
          Edição Adsumus Conillon
        </Typography>
        <Typography
          className="label-feel-points"
          component="p"
          color="white"
          variant="body1"
        >
          Acumule
          <Typography color="primary" variant="body1" component="span">
            {' 70 '}
          </Typography>
          Feel Points
        </Typography>
      </Box>
      <Box className="product-plans-options">
        <ButtonGroup size="small" variant="contained">
          <Button>Basic</Button>
          <Button>Standard</Button>
          <Button>Premium</Button>
        </ButtonGroup>
      </Box>
      <Box component="div" className="product-price-info">
        <Box className="product-price-descount-info">
          <Typography
            component="span"
            className="product-price-descount-porcent"
            color="white"
          >
            xx% OFF
          </Typography>
          <Typography
            component="span"
            className="product-price-descount"
            color="white"
          >
            R$ 24,90
          </Typography>
        </Box>
        <Typography component="span" color="white" className="product-price">
          R$ 17,90
        </Typography>
      </Box>
      <Box component="div" className="actions">
        <Button
          className="white-text"
          variant="outlined"
          size={getSizeButton(variantViewPort)}
          color="primary"
        >
          Detalhes
        </Button>
        <IconButton size={getSizeButton(variantViewPort)} color="primary">
          <Image
            src="/icons/add-cart.svg"
            width="30px"
            height="30px"
            layout="fixed"
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ProductCatalogRepresentation;
