// import { useRouter } from 'next/router';
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';
import ProductInterface from '../Contracts/ProductInterface';
import getDefaultStyle from './style';
import ProductInfo from '../ProductInfo/ProductInfo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductCatalogItemProps {
  variantView?: 'mobile' | 'desktop';
  product?: ProductInterface;
}

export const ProductCatalogItem: React.FC<ProductCatalogItemProps> = ({
  variantView = 'desktop',
  product,
}): JSX.Element => {
  const router = useRouter();
  return (
    <Box
      sx={getDefaultStyle()}
      className={`product-catalog-item product-catalog-item-${variantView}`}
    >
      <Box className="product-image">
        <figure>
          <img src="/imgs/product-sample1.png" alt="Product name" />
        </figure>
      </Box>
      <ProductInfo
        product={product}
        variantViewPort={variantView}
        className="product-info"
        handleClickDetailsButton={() =>
          router.push(`catalog/product/${product?.sku}`)
        }
      />
    </Box>
  );
};

export default ProductCatalogItem;
