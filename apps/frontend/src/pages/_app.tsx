import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import createEmotionCache from '@emotion/cache';
import { ThemeProvider } from '@atlascode/coffee-front-components';
import '../../public/css/global.css';
import { MotionBox } from '@atlascode/coffee-frontend-utility';

require('../../mocks');

function CustomApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: 'css' });
  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

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
            <LayoutEcommerce>
              <div className="app">
                <Component {...pageProps} />
              </div>
            </LayoutEcommerce>
          </MotionBox>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;

// Front simples para landing -
// Front com painel - Nextjs + Painel dinâmico  + Instanciar EC2 ou equivalente na nuvem e rodar imagem do POSTGRES
