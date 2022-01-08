import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Form } from '../components/form';
import { HeaderBottom } from '../components/headerBottom';
import { HeaderSmall } from '../components/headerSmall';
import { HeaderSmallMobile } from '../components/headerSmallMobile';
import styles from '../styles/pages/Import.module.scss';

const Import: NextPage = () => {
  const router = useRouter();

  const [route, setRoute] = useState(true);

  useEffect(() => {
    if (router.asPath === '/') {
      setRoute(true);
    } else if (router.asPath === '/import') {
      setRoute(false);
    }
  }, [router]);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Import</title>
          <meta
            name="description"
            content="Adicione sua transação financeira e gerencie os seus gastos e ganhos"
          />
          <link rel="icon" href="/assets/logo.png" />
        </Head>

        <main className={styles.main}>
          <div className={styles.wrapperHeader}>
            <HeaderSmall route={route} />
          </div>
          <div className={styles.headerMobile}>
            <HeaderSmallMobile />
          </div>
          <div className={styles.import}>
            <h1>Cadastro</h1>
            <Form />
          </div>
        </main>
      </div>
      <div className={styles.wrapperHeaderBottom}>
        <HeaderBottom route={route} />
      </div>
    </>
  );
};

export default Import;
