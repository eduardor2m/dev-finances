import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { TransactionProvider } from '../hooks/useTransaction';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}

export default MyApp;
