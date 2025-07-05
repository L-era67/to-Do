import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import styles from "./style/Footer.module.css";
import itemDelStyle from "./style/Task.module.css";
import add from "./style/Form.module.css";

export const AlertDialogDemo = ({ allDeleteComp }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={styles.clearBtn}>
          Clear completed
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={styles.diologTitle}>
            Are you sure you want to clear all completed tasks?
          </AlertDialogTitle>
          <AlertDialogDescription className={styles.diologDesc}>
            This action is irreversible. All completed tasks will be permanently
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={styles.clearBtn}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={allDeleteComp}
            className={styles.finalClearBtn}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const AlertDialogItem = ({ removeTaskById }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={itemDelStyle.taskDeleteBtn}>
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={styles.diologTitle}>
            Are you sure you want to delete this task?
          </AlertDialogTitle>
          <AlertDialogDescription className={styles.diologDesc}>
            This action is irreversible. This task will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={styles.clearBtn}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={removeTaskById}
            className={styles.finalClearBtn}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const AlertDialogAddTask = ({ handleAdd }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={add.taskAddBtn} onClick={handleAdd}>
          Add
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={styles.diologTitle}>
            Missing Task Name!
          </AlertDialogTitle>
          <AlertDialogDescription className={styles.diologDesc}>
            Please enter a task before adding it. You can't add an empty task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel className={styles.clearBtn}>
            Cancel
          </AlertDialogCancel> */}
          <AlertDialogAction className={styles.finalClearBtn}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
