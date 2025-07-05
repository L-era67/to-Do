import { AlertDialogItem } from "./deleteDialog";
import styles from "./style/Task.module.css";
import { motion } from "framer-motion";

export const Task = ({ task, removeTaskById, toggleTaskById }) => {
  // ened handle dl hiisen tohioldold bugd del

  // const delBtn = () => {
  //   alert("Are you sure you want to delkete this task?");
  // }

  return (
    <div className={styles.mainTask}>
      <div className={styles.checkAndTxt}>
        <motion.input
          checked={task.isComplated}
          onChange={() => toggleTaskById(task.id)}
          className={styles.checkBox}
          type="checkbox"
          animate={{
            scale: task.isComplated ? 1.1 : 1, /*true bol 1.1-> 10% tomron  1 jijigrehgui hewendee*/
            rotate: task.isComplated ? 360 : 0,/*true bol buten erguulen 0 ehnii bairlal*/
          }} /*animate ni Framer maotion tuhain component-d ymar ymar animation effect heregjuuleh we gedgiig zaaj ugdug */
          transition={{ duration: 0.3 }} /*scale&rotate ni 0.3s hugatsaand ywagdan */
        />

        <p
          style={{ textDecoration: task.isComplated ? "line-through" : "" }}
          className={styles.taskTxt}
        >
          {task.taskName}
        </p>
      </div>

      <AlertDialogItem removeTaskById = {()=>removeTaskById(task.id)}/>
    </div>
  );
};
