import { Box } from '@material-ui/core';
import {
  ProductInfo,
  ProductInterface,
} from '@atlascode/coffee-front-components';
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
                    <img src="/imgs/product-sample.png" alt="Product name" />
                  </figure>
                </Box>
                <Box className="product-area">
                  <ProductInfo product={prod} variantViewPort="mobile" />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default MobileSlideProductRepresentation;
