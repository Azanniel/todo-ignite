import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Task, TaskAttributes } from './components/Task';

import clipboard from './assets/clipboard.png';

import styles from './App.module.css';

export function App() {
  const [tasks, setTasks] = useState<TaskAttributes[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskAttributes = {
      id: uuid(),
      title: newTaskTitle,
      isComplete: false
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  }

  function changeChecked(taskIdToComplete: string) {
    const tasksWithOneTaskChecked = tasks.map(task => {
      if(task.id === taskIdToComplete) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(tasksWithOneTaskChecked);
  }

  function deleteTask(taskIdToComplete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskIdToComplete
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const isTaskListEmpty = tasks.length === 0;
  const countTaskInList = tasks.length;
  const countTaskCompletedInList = tasks.reduce((prev, current) => {
    if(current.isComplete) {
      return prev + 1;
    }

    return prev;
  }, 0);
  const badgeToCompletedTasksCount = `${countTaskCompletedInList} de ${countTaskInList}`;

  const tasksSortedByIsComplete = [...tasks].sort((a, b) => {
    if(a.isComplete > b.isComplete) {
      return 1;
    }

    if(a.isComplete < b.isComplete) {
      return -1;
    }

    return 0;
  });

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />

          <Button type='submit'>Criar</Button>
        </form>

        <div className={styles.tasks}>
          <header className={styles.info}>
            <div>
              <strong className={styles.created}>
                Tarefas criadas
              </strong>

              <span className={styles.counter}>
                {countTaskInList}
              </span>
            </div>

            <div>
              <strong className={styles.done}>
                Concluídas
              </strong>

              <span className={styles.counter}>
                {isTaskListEmpty ? '0' : badgeToCompletedTasksCount}
              </span>
            </div>
          </header>

          {isTaskListEmpty && (
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
          )}

          {!isTaskListEmpty && (
            <section className={styles.list}>
              {tasksSortedByIsComplete.map(task => {
                return (
                  <Task
                    key={task.id}
                    data={task}
                    onChangeChecked={changeChecked}
                    onDelete={deleteTask}
                  />
                )
              })}
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
