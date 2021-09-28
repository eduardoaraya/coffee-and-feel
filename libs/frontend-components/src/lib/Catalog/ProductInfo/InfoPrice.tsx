import { ProductPlans } from '@atlascode/coffee-front-components';
import { Box, Typography } from '@material-ui/core';
import ProductInterface from '../Contracts/ProductInterface';

export const InfoPrice = ({
  product,
  isActive,
}: {
  product?: ProductInterface;
  isActive?: (id: number) => boolean;
}) =>
  product && product.plans.length > 0
    ? product.plans.map((plan: ProductPlans) => (
        <Box
          sx={{
            '&.product-price-area': {
              display: 'none',
              '&.active': {
                display: 'flex',
              },
            },
            '.product-price-descount-info': {
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
              justifyContent: 'content',
              alignItems: 'center',
              '.product-price-descount': {
                padding: '5px 15px',
                textAlign: 'center',
                textDecoration: 'line-through',
              },
            },
            '.product-price-descount-porcent': {
              maxWidth: '85px',
              padding: '5px 15px',
              fontSize: '12px',
              borderRadius: '50px',
              background: (theme) => theme.palette.success.main,
              textAlign: 'center',
            },
            '.product-price': {
              fontSize: '33px',
            },
          }}
          key={plan.id}
          className={`product-price-area ${
            isActive && isActive(plan.id) ? 'active' : ''
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

export default InfoPrice;
