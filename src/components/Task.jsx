import styles from "./style/Task.module.css";

export const Task = ({task}) => {
  return (
    <div className={styles.mainTask}>
      <div className={styles.checkAndTxt}>
        <input className={styles.checkBox} type="checkbox" />
        <p className={styles.taskTxt}>{task.taskName}</p>
      </div>

      <button className={styles.taskDeleteBtn}>Delete</button>
    </div>
  );
};
