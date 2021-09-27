import { TabGroup, TabOption } from '../TabGroup/TabGroup';
import {
  Button,
  Typography,
  IconButton,
  Box,
  Skeleton,
} from '@material-ui/core';
import style from './style';
import { useState } from 'react';

type variantView = 'mobile' | 'desktop';

export interface ProductPlans {
  id: number;
  name: string;
  priceTotal: string;
  price: string;
  porcent: number;
}

export interface ProductInterface {
  id: number;
  name: string;
  feelPoints: number;
  plans: ProductPlans[];
  sku: string;
}

/* eslint-disable-next-line */
export interface ProductCatalogRepresentationProps {
  variantViewPort?: variantView;
  className?: string;
  product?: ProductInterface;
}

const getSizeButton = (
  variant: string
): 'small' | 'medium' | 'large' | undefined =>
  'mobile' === variant ? 'small' : 'large';

export const ProductCatalogRepresentation: React.FC<ProductCatalogRepresentationProps> =
  ({ variantViewPort = 'desktop', className, product }): JSX.Element => {
    const [userPlan, setUserPlan] = useState<number>(1);

    const isCurrentPlan = (id: number): boolean => id === userPlan;

    const getOptionsByProduct = (product?: ProductInterface): TabOption[] => {
      return product && product.plans.length > 0
        ? product.plans.map(
            (plan) =>
              ({
                id: plan.id,
                content: plan.name,
                active: isCurrentPlan(plan.id),
                handleClick: () => setUserPlan(plan.id),
              } as TabOption)
          )
        : [];
    };

    const getInfoPriceByPlans = (product?: ProductInterface) =>
      product && product.plans.length > 0
        ? product.plans.map((plan) => (
            <Box
              key={plan.id}
              className={`product-price-area ${
                isCurrentPlan(plan.id) ? 'active' : ''
              }`}
            >
              <Box className="product-price-descount-info">
                <Typography
                  color="white"
                  component="span"
                  className="product-price-descount-porcent"
                >
                  {`${plan.porcent * 100}%OFF`}
                </Typography>
                <Typography component="span" className="product-price-descount">
                  {plan.price}
                </Typography>
              </Box>
              <Typography component="span" className="product-price">
                {plan.priceTotal}
              </Typography>
            </Box>
          ))
        : [];

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
          <TabGroup
            className="product-representation-tab-groups"
            tabs={getOptionsByProduct(product)}
          />
        </Box>
        <Box component="div" className="product-price-info">
          {getInfoPriceByPlans(product)}
        </Box>
        <Box component="div" className="actions">
          <Button
            // className="white-text"
            variant="outlined"
            size={getSizeButton(variantViewPort)}
            color="primary"
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

export default ProductCatalogRepresentation;
