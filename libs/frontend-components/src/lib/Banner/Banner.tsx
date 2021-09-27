import style from './style';
import { Box, BoxProps } from '@material-ui/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

export type BannerItem = {
  desktopURL: string;
  mobileURL: string;
};

export interface BannerProps extends BoxProps {
  SwiperProps?: SwiperOptions;
  items?: BannerItem[];
}

export const Banner = ({
  items = [],
  sx,
  SwiperProps,
  ...rest
}: BannerProps) => {
  return (
    <Box sx={{ ...style.wrapper, ...sx }} {...rest}>
      <Swiper
        {...SwiperProps}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {items.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box sx={style.banner(banner)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
