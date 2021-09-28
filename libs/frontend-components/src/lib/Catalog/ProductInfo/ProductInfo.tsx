import { TabGroup, TabOption } from '../../TabGroup/TabGroup';
import {
  Button,
  Typography,
  IconButton,
  Box,
  Skeleton,
} from '@material-ui/core';
import style from './style';
import { MouseEventHandler } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useProductPlansTabs } from '@atlascode/coffee-frontend-hooks';
import InfoPrice from './InfoPrice';
import ProductInterface from '../Contracts/ProductInterface';

type variantView = 'mobile' | 'desktop';

/* eslint-disable-next-line */
export interface ProductInfoProps {
  variantViewPort?: variantView;
  className?: string;
  product?: ProductInterface;
  handleClickDetailsButton?: MouseEventHandler<HTMLAnchorElement>;
}

const getSizeButton = (
  variant: string
): 'small' | 'medium' | 'large' | undefined =>
  'mobile' === variant ? 'small' : 'large';

export const ProductInfo: React.FC<ProductInfoProps> = ({
  variantViewPort = 'desktop',
  className,
  product,
  handleClickDetailsButton,
}): JSX.Element => {
  const { tabs, isCurrentPlan, userPlan } = useProductPlansTabs(product);

  return (
    <Box
      component="div"
      className={`product-representation ${className}`}
      sx={style.productRepresentation}
    >
      <Box className="product-title">
        {product?.name ? (
          <Typography component="h2" variant="h2">
            {product?.name}
          </Typography>
        ) : (
          <Skeleton height={35} variant="rectangular" />
        )}
        {product?.name ? (
          <Typography
            className="label-feel-points"
            component="p"
            variant="body1"
          >
            Acumule{' '}
            <Typography color="primary" variant="body1" component="span">
              {product?.feelPoints}
            </Typography>{' '}
            Feel Points
          </Typography>
        ) : (
          <Skeleton
            className="label-feel-points"
            height={35}
            variant="rectangular"
          />
        )}
      </Box>
      <Box className="product-plans-options">
        <TabGroup className="product-representation-tab-groups" tabs={tabs} />
      </Box>
      <Box component="div" className="product-price-info">
        {InfoPrice({ product, isActive: isCurrentPlan })}
      </Box>
      <Box component="div" className="actions">
        <Button
          variant="outlined"
          size={getSizeButton(variantViewPort)}
          color="primary"
          onClick={handleClickDetailsButton}
        >
          Detalhes
        </Button>
        <IconButton size={getSizeButton(variantViewPort)} color="primary">
          <img src="/icons/add-cart.svg" alt="Cart icon" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductInfo;
