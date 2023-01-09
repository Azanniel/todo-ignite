import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';

import clipboard from './assets/clipboard.png';

import styles from './App.module.css';
import { Task } from './components/Task';

const tasks = [
  { id: '1', description: 'Terminar o desafio', isComplete: false },
  { id: '2', description: 'Subir para o github', isComplete: false },
  { id: '3', description: 'Compartilhar no LinkedIn', isComplete: false },
  { id: '4', description: 'Fazer post no Instagram', isComplete: true }
]

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

          <Button type='submit'>Criar</Button>
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

          {/* <section className={styles.empty}>
            <img
              src={clipboard}
              alt="bloco de anotações com linhas preenchidas e tons de cinza"
            />

            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </section> */}

          <section className={styles.list}>
            {tasks.map(task => <Task key={task.id} />)}
          </section>
        </div>
      </main>
    </div>
  )
}
