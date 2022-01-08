import { FC } from 'react';

import Link from 'next/link';

import styles from '../styles/components/HeaderSmall.module.scss';

interface Props {
  route: boolean;
}

export const HeaderSmall: FC<Props> = ({ route }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <h1 className={styles.headerTitle}>
          dev.finance<span>$</span>
        </h1>
      </div>
      <div className={styles.headerLinks}>
        <Link href="/">
          <a>
            <button
              className={styles.headerLink}
              style={{
                borderBottom: route ? ' 1px solid var(--green)' : 'none',
              }}
            >
              <span className={styles.headerLinkText}>Listagem</span>
            </button>
          </a>
        </Link>

        <Link href="/import">
          <a>
            <button
              className={styles.headerLink}
              style={{
                borderBottom: route ? 'none' : ' 1px solid var(--green)',
              }}
            >
              <span className={styles.headerLinkText}>Importar</span>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
