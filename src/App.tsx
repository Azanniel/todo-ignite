import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form className={styles.form}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
          />

          <button className={styles.submit}>
            <span>Criar</span>

            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </main>
    </div>
  )
}
