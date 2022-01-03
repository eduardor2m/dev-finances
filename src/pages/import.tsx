import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Form } from '../components/form';
import { HeaderSmall } from '../components/headerSmall';
import styles from '../styles/pages/Import.module.scss';

const Import: NextPage = () => {
  const router = useRouter();

  const [route, setRoute] = useState(true);

  useEffect(() => {
    if (router.asPath === '/') {
      setRoute(true);
    } else if (router.asPath === '/list') {
      setRoute(false);
    }
  }, [router]);

  return (
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
        <HeaderSmall route={route} />
        <div className={styles.import}>
          <h1>Transação</h1>
          <Form />
        </div>
      </main>
    </div>
  );
};

export default Import;
