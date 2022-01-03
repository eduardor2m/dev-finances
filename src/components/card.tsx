import { FC, useEffect, useState } from 'react';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';

import { useTransaction } from '../hooks/useTransaction';
import styles from '../styles/components/Card.module.scss';

type Status = {
  income: string;
  outcome: string;
  balance: string;
};

export const Card: FC = () => {
  const [status, setStatus] = useState<Status>({} as Status);

  const { statusTransaction } = useTransaction();

  useEffect(() => {
    const { incomeFormatted, outcomeFormatted, balanceFormatted } =
      statusTransaction();
    setStatus({
      income: incomeFormatted,
      outcome: outcomeFormatted,
      balance: balanceFormatted,
    });
  }, [statusTransaction]);

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Entradas</h2>
          <BsArrowUpCircle size={32} color="#49AA26" />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardText}>{status.income}</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Saídas</h2>
          <BsArrowDownCircle size={32} color="#E92929" />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardText}>{status.outcome}</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Total</h2>
          <MdAttachMoney size={32} color="#FFFFFF" />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardText}>{status.balance}</p>
        </div>
      </div>
    </div>
  );
};
