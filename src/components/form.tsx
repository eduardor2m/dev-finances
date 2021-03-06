import { FC, useState } from 'react';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';

import { useTransaction } from '../hooks/useTransaction';
import styles from '../styles/components/Form.module.scss';

export const Form: FC = () => {
  const [income, setIncome] = useState(true);

  const { addTransaction } = useTransaction();

  async function handleAddTransaction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = (
      e.currentTarget.elements.namedItem('title') as HTMLInputElement
    ).value;
    const price = (
      e.currentTarget.elements.namedItem('price') as HTMLInputElement
    ).value;
    const category = (
      e.currentTarget.elements.namedItem('category') as HTMLInputElement
    ).value;

    const date = new Date().toLocaleDateString('pt-BR');

    const transaction = {
      id: String(Math.random()),
      title,
      price: Number(price),
      category,
      type: income ? 'income' : 'outcome',
      date,
    };

    addTransaction(transaction);
    e.currentTarget.reset();
  }
  return (
    <form className={styles.formImport} onSubmit={handleAddTransaction}>
      <div className={styles.formLI}>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          id="title"
          className={styles.input}
          placeholder="Ex.: Aluguel"
        />
      </div>
      <div className={styles.formLI}>
        <label htmlFor="value">Preço</label>
        <input
          type="number"
          id="price"
          className={styles.input}
          placeholder="Ex.: R$ 1400,00"
        />
      </div>
      <div className={styles.formButtons}>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            setIncome(true);
          }}
          style={{
            backgroundColor: income ? 'rgba(73,170,38, 0.2)' : '#f0f2f5',
          }}
        >
          <BsArrowUpCircle
            size={22}
            color="#49AA26"
            style={{
              marginRight: '10px',
            }}
          />
          Entrada
        </button>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            setIncome(false);
          }}
          style={{
            backgroundColor: income ? '#f0f2f5' : 'rgba(233,41,61,0.2)',
          }}
        >
          <BsArrowDownCircle
            size={22}
            color="#E92929"
            style={{
              marginRight: '10px',
            }}
          />
          Saída
        </button>
      </div>
      <div className={styles.formLI}>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          className={styles.select}
          onChange={(e) => e.defaultPrevented}
        >
          <option value="Venda">Venda</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Casa">Casa</option>
        </select>
      </div>

      <input
        type="submit"
        value="Adicionar"
        className={styles.input}
        style={{
          backgroundColor: '#00bfa5',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginTop: '1.5rem',
          cursor: 'pointer',
        }}
      />
    </form>
  );
};
