import { ButtonHTMLAttributes, ReactNode } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      <span>{children}</span>

      <PlusCircle size={16} weight="bold" />
    </button>
  )
}