import { Checkbox } from './Checkbox';
import { TrashButton } from './TrashButton';

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox />

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

      <TrashButton />
    </div>
  )
}