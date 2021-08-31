import style from './style';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import { BannerProps } from './contracts/banner.interface';
import { BannerEntityType } from './contracts/types';
import { TransitionProvider } from './TransitionProvider';

const BannersList: BannerEntityType[] = [
  {
    id: 0,
    link: {
      desktop:
        'http://cafemarquesdacosta.com.br/wp-content/uploads/2019/01/banner-ecommerce-1024x343.jpg',
      mobile: 'https://miro.medium.com/max/1280/0*lKSW0AQyeqr6MeGt.jpg',
    },
    targetClass: 'active',
  },
  {
    id: 1,
    link: {
      desktop:
        'https://www.inovarti.com.br/media/wysiwyg/BANNER-PRINCIPAL_DIADOCLIENTE-min_3_.png',
      mobile:
        'https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg',
    },
    targetClass: '',
  },
];

export const Banner: React.FC<BannerProps> = ({
  time = 5000,
}: BannerProps): JSX.Element => {
  const [bannerList, setBannerList] = useState<BannerEntityType[]>(BannersList);

  const next = () => setBannerList(TransitionProvider(bannerList));

  useEffect(() => {
    let rotateBanner: NodeJS.Timeout;
    if (typeof window !== undefined) {
      rotateBanner = setInterval(() => {
        next();
      }, time);
    }
    return () => {
      if (rotateBanner) {
        clearInterval(rotateBanner);
      }
    };
  }, []);

  return (
    <Box sx={style.wrapper}>
      {bannerList.map((banner) => (
        <Box
          key={banner.id}
          sx={style.banner(banner)}
          className={banner.targetClass}
        ></Box>
      ))}
    </Box>
  );
};

export default Banner;
