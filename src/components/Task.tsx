import { Checkbox } from './Checkbox';
import { TrashButton } from './TrashButton';

import styles from './Task.module.css';

export interface TaskAttributes {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  data: TaskAttributes;
  onChangeChecked: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export function Task({ data, onChangeChecked, onDelete }: TaskProps) {
  function handleChangeChecked() {
    onChangeChecked(data.id);
  }

  function handleDelete() {
    onDelete(data.id);
  }

  return (
    <div className={data.isComplete ? styles.taskCompleted : styles.task}>
      <Checkbox onChange={handleChangeChecked} checked={data.isComplete} />

      <p>{data.title}</p>

      <TrashButton onClick={handleDelete} />
    </div>
  )
}