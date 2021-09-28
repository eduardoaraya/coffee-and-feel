/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
import { Box, BoxProps } from '@material-ui/core';
import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  SwiperOptions,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperComponent } from 'swiper/types/shared';
import 'swiper/swiper-bundle.min.css';

type Handler = (...args: unknown[]) => void | Promise<void>;

export type SwiperGenericWrapperProps<C> = {
  component: React.FC<C>;
  list?: C[];
  SwiperProps?: Omit<SwiperOptions, 'width' | 'height'>;
  sx?: Omit<BoxProps['sx'], 'width'>;
  swiperModules?: SwiperComponent[];
};
/**
 *
 * @param component  - A React functional component reference, list type will be inferred based on this parameter component props
 * @param SwiperProps SwiperProps - SwiperJS React wrapper props https://swiperjs.com/react
 * @param list[]  - A list of items that match type of React.FC props
 * @param sx  - Material UI system's box wrapper sx prop made available at v5 https://next.material-ui.com/components/box/#the-sx-prop
 * @returns JSX.Element
 */
export const SwiperGenericWrapper = <T extends {}>({
  component: Component,
  SwiperProps,
  list = [],
  swiperModules = defaultSwiperModules,
  sx,
}: SwiperGenericWrapperProps<T>) => {
  React.useMemo(() => SwiperCore.use([...swiperModules!]), [swiperModules]);

  return (
    <Box navigation pagination sx={sx} component={Swiper} {...SwiperProps}>
      {list.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <Component {...value} />
          </SwiperSlide>
        );
      })}
    </Box>
  );
};

export default SwiperGenericWrapper;

const defaultSwiperModules: SwiperGenericWrapperProps<
  React.FC<unknown>
>['swiperModules'] = [Navigation, Pagination, Autoplay] as SwiperComponent[];
