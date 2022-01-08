import { FC } from 'react';

import styles from '../styles/components/HeaderMobile.module.scss';

export const HeaderMobile: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <h1 className={styles.headerTitle}>
          dev.finance<span>$</span>
        </h1>
      </div>
      <div className={styles.day}>
        <h1 className={styles.dayTitle}>
          {new Date().toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'short',
          })}
        </h1>
      </div>
    </div>
  );
};
