import { Box } from '@material-ui/core';
import Image from 'next/image';
import ProductCatalogRepresentation from '../ProductCatalogRepresentation/ProductCatalogRepresentation';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style';

/* eslint-disable-next-line */
export interface MobileSlideProductRepresentationProps {}

export function MobileSlideProductRepresentation(
  props: MobileSlideProductRepresentationProps
) {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={15}
      centeredSlides={true}
      loop={true}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <SwiperSlide key={i}>
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
                <ProductCatalogRepresentation variantViewPort="mobile" />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MobileSlideProductRepresentation;
