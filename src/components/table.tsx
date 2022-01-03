import { FC } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { MdAttachMoney, MdFastfood } from 'react-icons/md';

import styles from '../styles/components/Table.module.scss';

type PropsTransaction = {
  data: {
    id: string;
    title: string;
    amount: number;
    date: string;
    category: string;
    type: string;
  }[];
};

export const Table: FC<PropsTransaction> = ({ data }) => {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderTitle}>
          Título
          <AiOutlineDown size={16} color="#969CB3" />
        </div>
        <div className={styles.tableHeaderPrice}>
          Preço
          <AiOutlineDown size={16} color="#969CB3" />
        </div>
        <div className={styles.tableHeaderCategory}>
          Categoria
          <AiOutlineDown size={16} color="#969CB3" />
        </div>
        <div className={styles.tableHeaderDate}>
          Data
          <AiOutlineDown size={16} color="#969CB3" />
        </div>
      </div>
      <div className={styles.tableBody}>
        {data.map((transaction) => (
          <div className={styles.tableRow} key={transaction.id}>
            <div className={styles.tableTitle}>
              <span className={styles.textTitle}>{transaction.title}</span>
            </div>
            <div
              className={styles.tablePrice}
              style={{
                color: transaction.type === 'income' ? '#12A454' : '#E83F5B',
              }}
            >
              {transaction.type === 'income' ? '' : '-'}{' '}
              {transaction.amount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </div>
            <div className={styles.tableCategory}>
              {transaction.category === 'Alimentação' ? (
                <MdFastfood size={20} color="#969cb3" />
              ) : transaction.category === 'Casa' ? (
                <BiHomeAlt size={20} color="#969cb3" />
              ) : transaction.category === 'Venda' ? (
                <MdAttachMoney size={20} color="#969cb3" />
              ) : (
                <MdAttachMoney size={20} color="#969cb3" />
              )}
              <span className={styles.textCategory}>
                {transaction.category}
              </span>
            </div>
            <div className={styles.tableDate}>{transaction.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
