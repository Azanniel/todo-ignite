import { ButtonHTMLAttributes } from 'react';
import { Trash } from 'phosphor-react';

import styles from './TrashButton.module.css';

export function TrashButton({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.trash} type="button" {...rest}>
      <Trash size={14} />
    </button>
  )
}