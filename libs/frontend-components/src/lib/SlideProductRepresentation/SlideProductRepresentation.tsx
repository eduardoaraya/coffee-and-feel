import { Box, IconButton } from '@material-ui/core';
import style from './style';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Image from 'next/image';
import ProductCatalogRepresentation, {
  ProductInterface,
} from '../ProductCatalogRepresentation/ProductCatalogRepresentation';
// Swipper Import
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

/* eslint-disable-next-line */
export interface SlideProductRepresentationProps {
  products?: ProductInterface[];
}

SwiperCore.use([Navigation, Pagination]);

export const SlideProductRepresentation: React.FC<SlideProductRepresentationProps> =
  ({ products }): JSX.Element => {
    return (
      <Box component="div" sx={style.root}>
        <IconButton
          className="slide-button prev"
          id="slide-prev"
          size="large"
          color="primary"
        >
          <ChevronLeft />
        </IconButton>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '#slide-next',
            prevEl: '#slide-prev',
          }}
        >
          {products?.map((prod) => (
            <SwiperSlide key={prod.id}>
              <Box className="product-grid">
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
                <Box className="product-area">
                  <ProductCatalogRepresentation
                    product={prod}
                    variantViewPort={'mobile'}
                  />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          id="slide-next"
          className="slide-button next"
          size="large"
          color="primary"
        >
          <ChevronRight />
        </IconButton>
      </Box>
    );
  };

export default SlideProductRepresentation;
