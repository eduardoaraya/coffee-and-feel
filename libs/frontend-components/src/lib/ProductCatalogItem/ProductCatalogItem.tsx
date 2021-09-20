import {
  ProductCatalogRepresentation,
  ProductInterface,
} from '../ProductCatalogRepresentation/ProductCatalogRepresentation';
import { Box } from '@material-ui/core';
import style from './style';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductCatalogItemProps {
  variantView?: 'mobile' | 'desktop';
  product?: ProductInterface;
}

export const ProductCatalogItem: React.FC<ProductCatalogItemProps> = ({
  variantView = 'desktop',
  product,
}): JSX.Element => {
  return (
    <Box
      sx={style.root}
      className={`product-catalog-item product-catalog-item-${variantView}`}
    >
      <Box className="product-image">
        <figure>
          <Image
            src="/imgs/product-sample.png"
            alt="Product name"
            layout="intrinsic"
            width="300px"
            height="300px"
          />
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
