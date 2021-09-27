import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
