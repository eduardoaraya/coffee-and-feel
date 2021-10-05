import { Box } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductInterface from '../Catalog/Contracts/ProductInterface';
import ProductCatalogItem from '../Catalog/ProductCatalogItem/ProductCatalogItem';
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
              <ProductCatalogItem product={prod} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default MobileSlideProductRepresentation;
