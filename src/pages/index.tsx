import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Card } from '../components/card';
import { Header } from '../components/header';
import { HeaderBottom } from '../components/headerBottom';
import { Table } from '../components/table';
import { useTransaction } from '../hooks/useTransaction';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
  const { transaction } = useTransaction();
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
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Seu balanço financeiro" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapperHeader}>
          <Header route={route} />
        </div>
        <Card />
        <Table data={transaction} />
        <div className={styles.wrapperHeaderBottom}>
          <HeaderBottom route={route} />
        </div>
      </main>
    </div>
  );
};

export default Home;
