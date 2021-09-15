import style from './style';
import Box from '@material-ui/core/Box';
import { BannerProps } from './contracts/Banner.interface';
import { BannerEntityType } from './contracts/types';

//Swiper import
import SwiperCore, { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const BannerList: BannerEntityType[] = [
  {
    id: 0,
    link: {
      desktop:
        'https://http2.mlstatic.com/D_NQ_755507-MLA47264929743_082021-OO.webp',
      mobile: 'https://miro.medium.com/max/1280/0*lKSW0AQyeqr6MeGt.jpg',
    },
  },
  {
    id: 1,
    link: {
      desktop:
        'https://http2.mlstatic.com/D_NQ_894709-MLA47263975191_082021-OO.webp',
      mobile:
        'https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg',
    },
  },
];

export const Banner: React.FC<BannerProps> = (): JSX.Element => {
  return (
    <Box sx={style.wrapper}>
      <Swiper
        effect={'fade'}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {BannerList.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Box sx={style.banner(banner)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
