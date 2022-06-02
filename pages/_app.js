import '@/css/tailwind.css';
import '@/css/prism.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import splitbee from '@splitbee/web';

import siteMetadata from '@/data/siteMetadata';
import Analytics from '@/components/analytics';
import LayoutWrapper from '@/components/LayoutWrapper';
import { ClientReload } from '@/components/ClientReload';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }) {
  splitbee.init();

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Analytics />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
