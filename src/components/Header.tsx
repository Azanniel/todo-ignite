import styles from './Header.module.css';
import todoLogo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Logo da aplicação com um foguete à esquerda e um texto todo ao lado direito"
      />
    </header>
  )
}