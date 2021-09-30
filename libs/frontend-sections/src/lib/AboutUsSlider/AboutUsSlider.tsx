import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Typography, useMediaQuery } from '@material-ui/core';
import {
  MotionBox,
  SwiperGenericWrapper,
  SwiperSlideData,
} from '@atlascode/coffee-frontend-utility';
import { CircleIconButton } from '@atlascode/coffee-front-components';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import React from 'react';

export interface AboutUsSliderProps extends BoxProps {
  list?: PhotoSlideProps[];
}

export function AboutUsSlider({ sx, list = [], ...rest }: AboutUsSliderProps) {
  const [activeList, setActiveList] = React.useState<SlideProps[]>([]);

  const isDesktop = useMediaQuery('@media(min-width: 1024px)');

  React.useEffect(() => {
    if (!isDesktop && list && list.length > 0) {
      setActiveList(list);
    } else {
      setActiveList([
        {
          caption:
            'Todo o processo é feito de forma especial para entregar o melhor café para os nossos clientes.',
          title: 'Veja a nossa produção de perto',
        },
        ...list,
      ]);
    }
  }, [isDesktop, list]);

  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.textMobileContainer}>
        <Typography sx={styles.textMobileTitle}>
          Veja a nossa produção de perto
        </Typography>

        <Typography sx={styles.textMobileCaption}>
          Todo o processo é feito de forma especial para entregar o melhor café
          para os nossos clientes.
        </Typography>
      </Box>

      <SwiperGenericWrapper
        SwiperProps={{
          slidesPerView: 1.2,
          spaceBetween: 25,
          speed: 2500,
          navigation: {
            nextEl: '#about-us-next-navigation',
            prevEl: '#about-us-prev-navigation',
          },

          breakpoints: {
            1024: {
              slidesPerView: 2.35,
              speed: 2500,
              spaceBetween: 75,
            },
          },
        }}
        component={Slide}
        list={activeList}
      />

      <Box sx={styles.navigationButtonWrapper}>
        <CircleIconButton id="about-us-prev-navigation" icon={ChevronLeft} />
        <CircleIconButton id="about-us-next-navigation" icon={ChevronRight} />
      </Box>
    </Box>
  );
}

export default AboutUsSlider;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    position: 'relative',
    pl: { xs: '2em' },
  },

  navigationButtonWrapper: {
    width: '100%',
    bottom: 0,
    left: 0,
    display: 'flex',
    columnGap: { xs: '2em', lg: '4em' },
    justifyContent: 'center',
    pt: { xs: '2em', lg: '5em' },
  },

  textMobileContainer: {
    display: { xs: 'flex', lg: 'none' },
    flexDirection: 'column',
    rowGap: { xs: '1em' },
    pb: { xs: '2em' },
    alignItems: { sm: 'center' },
    textAlign: { sm: 'center', lg: 'start' },
  },
  textMobileTitle: {
    fontSize: { xs: '2em', sm: '2.5em' },
    fontWeight: 700,
    color: '#323232',
    maxWidth: { xs: '17ch' },
  },
  textMobileCaption: {
    fontSize: { xs: '1.6em', sm: '1.8em' },
    color: (theme) => theme.palette.grey[500],
    maxWidth: { xs: '32ch' },
  },

  navigationButton: {},

  textSlideContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: { xs: '1em' },
    height: { lg: '46em' },
    pl: { lg: '10em' },
  },
  textSlideTitle: {
    fontSize: { xs: '2em', lg: '3em' },
    fontWeight: 700,
    color: '#323232',
    maxWidth: { xs: '17ch' },
  },
  textSlideCaption: {
    fontSize: { xs: '1.6em', lg: '2em' },
    color: (theme) => theme.palette.grey[500],
    maxWidth: { xs: '32ch' },
  },

  photoSlideContainer: {
    width: { xs: '28em', sm: '40em', lg: '57em' },
    height: { xs: '23em', sm: '35em', lg: '46em' },
  },
  photoSlidePicture: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

interface TextSlideProps {
  title: string;
  caption: string;
}
const TextSlide = (props: TextSlideProps) => {
  const {
    caption,
    isActive,
    isDuplicate,
    isNext,
    isPrev,
    isVisible,
    title,
    index,
  } = props as TextSlideProps & SwiperSlideData;

  return (
    <MotionBox
      initial="hidden"
      animate={isActive && index === 0 ? 'visible' : 'hidden'}
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
      transition={{
        duration: 0.75,
      }}
      sx={styles.textSlideContainer}
    >
      <Typography sx={styles.textSlideTitle}>{props.title}</Typography>
      <Typography sx={styles.textSlideCaption}>{props.caption}</Typography>
    </MotionBox>
  );
};

interface PhotoSlideProps {
  src: string;
  alt?: string;
}

const PhotoSlide = (props: PhotoSlideProps) => {
  return (
    <Box sx={styles.photoSlideContainer}>
      <Box
        sx={styles.photoSlidePicture}
        component="img"
        src={props.src}
        alt={`${props.alt}`}
      />
    </Box>
  );
};

type SlideProps = TextSlideProps | PhotoSlideProps;

const Slide = (props: Partial<SlideProps>) => {
  if (Object.keys(props).includes('src')) {
    return <PhotoSlide {...(props as PhotoSlideProps)} />;
  } else {
    return <TextSlide {...(props as TextSlideProps)} />;
  }
};
