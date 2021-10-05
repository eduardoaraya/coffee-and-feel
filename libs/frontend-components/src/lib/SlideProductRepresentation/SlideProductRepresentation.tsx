import { Box, IconButton } from '@material-ui/core';
import style from './style';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import ProductCatalogItem from '../Catalog/ProductCatalogItem/ProductCatalogItem';
import ProductInterface from '../Catalog/Contracts/ProductInterface';
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
              <Box className="product-wrapper">
                <ProductCatalogItem product={prod} />
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
