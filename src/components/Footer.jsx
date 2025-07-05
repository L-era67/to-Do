import styles from "./style/Footer.module.css";

import { color } from "framer-motion";
import { AlertDialogDemo } from "./deleteDialog";
import { Button } from "./ui/button";

export const Footer = ({
  allCount,
  completedCount,
  allDeleteComp,
  taskList,
}) => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        {completedCount} of {allCount} <br /> tasks completed
      </p>

      {/* <button className={styles.clearBtn} onClick={allDeleteComp}>
        Clear Completed
      </button> */}

      {completedCount > 0 ? (
        <AlertDialogDemo allDeleteComp={allDeleteComp} />
      ) : (
        <Button className={styles.NonCleatBtn}>Clear completed</Button>
      )}
    </div>
  );
};

// if(!allcount && !completedCount){
//     return (no task yet)
// }
// return( <p>{completedCount} of {allCount} tasks completed</p>)
// ingej hiiwel allCount ba completed hoyuland filtertaskList - r hiihen
