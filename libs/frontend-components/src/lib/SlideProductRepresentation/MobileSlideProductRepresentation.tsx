import { Box } from '@material-ui/core';
import Image from 'next/image';
import ProductCatalogRepresentation, {
  ProductInterface,
} from '../ProductCatalogRepresentation/ProductCatalogRepresentation';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style';

/* eslint-disable-next-line */
export interface MobileSlideProductRepresentationProps {
  products?: ProductInterface[];
}

export const MobileSlideProductRepresentation: React.FC<MobileSlideProductRepresentationProps> =
  ({ products }): JSX.Element => {
    return (
      <Swiper
        slidesPerView={1.2}
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
      >
        {products?.map((prod) => (
          <SwiperSlide key={prod.id}>
            <Box component="div" sx={style.root} className="mobile-version">
              <Box className="product-grid">
                <Box className="product-image">
                  <figure>
                    <Image
                      src="/imgs/product-sample.png"
                      alt="Product name"
                      layout="fill"
                    />
                  </figure>
                </Box>
                <Box className="product-area">
                  <ProductCatalogRepresentation
                    product={prod}
                    variantViewPort="mobile"
                  />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default MobileSlideProductRepresentation;
