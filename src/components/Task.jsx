import styles from "./style/Task.module.css";

export const Task = ({ task, removeTaskById, toggleTaskById }) => {
  // ened handle dl hiisen tohioldold bugd del

  // const delBtn = () => {
  //   alert("Are you sure you want to delkete this task?");
  // }

  return (
    <div className={styles.mainTask}>
      <div className={styles.checkAndTxt}>
        <input
          checked={task.isComplated}
          onChange={() => toggleTaskById(task.id)}
          className={styles.checkBox}
          type="checkbox"
        />

        <p className={styles.taskTxt}>{task.taskName}</p>
      </div>

      <button
        onClick={() => removeTaskById(task.id)}
        className={styles.taskDeleteBtn}
      >
        Delete
      </button>

     
    </div>
  );
};
