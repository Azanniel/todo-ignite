import { Header } from './components/Header';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form className={styles.form}>
          <input
            className={styles.field}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />

          <button>Criar</button>
        </form>
      </main>
    </div>
  )
}
