import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@atlascode/coffee-front-components';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import '../../public/css/global.css';

require('../../mocks');

function CustomApp(
  props: AppProps & {
    emotionCache?: EmotionCache;
    Component: NextPage & { getLayout?: (page: ReactElement) => ReactNode };
  }
) {
  const clientSideCache = createEmotionCache({ key: 'css' });
  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Coffee and Feel!</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <MotionBox
            animate="visible"
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                zIndex: 3000,
              },
              hidden: {
                opacity: 0,
                zIndex: -1,
              },
            }}
            transition={{
              duration: 1,
            }}
            sx={{ width: '100%', height: '100%' }}
            key={router.route}
          >
            <div className="app">{getLayout(<Component {...pageProps} />)}</div>
          </MotionBox>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;
