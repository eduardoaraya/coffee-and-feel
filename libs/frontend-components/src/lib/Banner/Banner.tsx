import style from './style';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import { BannerProps } from './contracts/Banner.interface';
import { BannerEntityType } from './contracts/types';
import { TransitionProvider } from './TransitionProvider';

const BannersList: BannerEntityType[] = [
  {
    id: 0,
    link: {
      desktop:
        'https://http2.mlstatic.com/D_NQ_755507-MLA47264929743_082021-OO.webp',
      mobile: 'https://miro.medium.com/max/1280/0*lKSW0AQyeqr6MeGt.jpg',
    },
    targetClass: 'active',
  },
  {
    id: 1,
    link: {
      desktop:
        'https://http2.mlstatic.com/D_NQ_894709-MLA47263975191_082021-OO.webp',
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
