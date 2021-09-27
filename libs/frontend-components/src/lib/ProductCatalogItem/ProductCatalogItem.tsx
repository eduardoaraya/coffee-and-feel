import { useRouter } from 'next/router';
import {
  ProductCatalogRepresentation,
  ProductInterface,
} from '../ProductCatalogRepresentation/ProductCatalogRepresentation';
import { Box } from '@material-ui/core';
import style from './style';

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
      sx={style.root}
      onClick={(_) => router.push(`catalog/product/${product.sku}`)}
      className={`product-catalog-item product-catalog-item-${variantView}`}
    >
      <Box className="product-image">
        <figure>
          <img src="/imgs/product-sample1.png" alt="Product name" />
        </figure>
      </Box>
      <ProductCatalogRepresentation
        product={product}
        variantViewPort={variantView}
        className="product-info"
      />
    </Box>
  );
};

export default ProductCatalogItem;
