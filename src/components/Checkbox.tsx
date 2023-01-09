import { Check } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        {...rest}
      />

      <div className={styles.checkMark}>
        <Check weight="bold" />
      </div>
    </label>
  )
}