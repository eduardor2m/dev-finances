import { createContext, ReactNode, useContext, useState } from 'react';

interface TransactionProviderProps {
  children: ReactNode;
}

type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: string;
  type: string;
};

type Status = {
  income: number;
  outcome: number;
  balance: number;
};

interface TransactionContextData {
  transaction: Transaction[];
  addTransaction: (transaction: Transaction) => Promise<void>;
  removeTransaction: (transactionId: string) => void;
  statusTransaction: () => Status;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({
  children,
}: TransactionProviderProps): JSX.Element {
  const storageKey = '@DevFinances:transactions';

  const [transaction, setTransaction] = useState<Transaction[]>(() => {
    if (typeof window !== 'undefined') {
      const storagedTransaction = localStorage.getItem(storageKey);

      if (storagedTransaction) {
        return JSON.parse(storagedTransaction);
      }
    }

    return [];
  });

  const addTransaction = async (newTransaction: Transaction) => {
    const newTransactions = [...transaction, newTransaction];

    try {
      setTransaction(newTransactions);
      localStorage.setItem(storageKey, JSON.stringify(newTransactions));
    } catch {
      throw new Error('Erro na adição do produto');
    }
  };

  const removeTransaction = (transactionId: string) => {
    try {
      const newTransaction = transaction.filter(
        (transaction) => transaction.id !== transactionId
      );
      setTransaction(newTransaction);
      localStorage.setItem(storageKey, JSON.stringify(newTransaction));
    } catch {
      throw new Error('Erro na remoção do produto');
    }
  };

  const statusTransaction = () => {
    let outcome = 0;
    let income = 0;
    transaction.map((transaction) => {
      if (transaction.type === 'outcome') {
        outcome += transaction.amount;
      } else {
        income += transaction.amount;
      }
    });

    const balance = income - outcome;

    return {
      income,
      outcome,
      balance,
    };
  };

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        addTransaction,
        removeTransaction,
        statusTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext);

  return context;
}
