import { FC } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

import Link from 'next/link';

import styles from '../styles/components/HeaderBottom.module.scss';

interface Props {
  route: boolean;
}

export const HeaderBottom: FC<Props> = ({ route }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLinks}>
        <Link href="/">
          <a>
            <button
              className={styles.headerLink}
              style={{
                borderBottom: route ? ' 3px solid var(--green)' : 'none',
              }}
            >
              <AiOutlineUnorderedList
                size={20}
                color={route ? 'var(--green)' : 'none'}
              />
              <span
                className={styles.headerLinkText}
                style={{
                  color: route ? 'var(--title)' : 'none',
                }}
              >
                Listagem
              </span>
            </button>
          </a>
        </Link>

        <Link href="/import">
          <a>
            <button
              className={styles.headerLink}
              style={{
                borderBottom: route ? 'none' : ' 3px solid var(--green)',
              }}
            >
              <MdAttachMoney
                size={20}
                color={route ? 'none' : 'var(--green)'}
              />
              <span
                className={styles.headerLinkText}
                style={{
                  color: route ? 'none' : 'var(--title)',
                }}
              >
                Cadastrar
              </span>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
