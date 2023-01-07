import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Input } from './components/Input';

import clipboard from './assets/clipboard.png';

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

          <button type="submit" className={styles.submit}>
            <span>Criar</span>

            <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <div className={styles.tasks}>
          <header className={styles.info}>
            <div>
              <strong className={styles.created}>
                Tarefas criadas
              </strong>

              <span className={styles.counter}>0</span>
            </div>

            <div>
              <strong className={styles.done}>
                Concluídas
              </strong>

              <span className={styles.counter}>0</span>
            </div>
          </header>

          <main>
            <section className={styles.empty}>
              <img
                src={clipboard}
                alt="bloco de anotações com linhas preenchidas e tons de cinza"
              />

              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </section>
          </main>
        </div>
      </main>
    </div>
  )
}
