import { AppProps } from 'next/app';
import Head from 'next/head';
import './default.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
