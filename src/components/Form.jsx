import { useState } from "react";
import style from "./style/Form.module.css";
import { AlertDialogAddTask } from "./deleteDialog";
import { Button } from "./ui/button";

export const Form = ({ setTaskList, taskList }) => {
  // settasklist(tasklist[]) uuniig prps buyu destructure awaad input value-g ene
  // setTaskList- ruu [{..,},{...}] ruu object(data bolgoj)
  // ene array dotor SPREAD OPE ashiglaj oruulna.
  // 1. value awhiin tuld state hiiya ;)
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isComplated: false,
    };

    if (newTask.taskName === "") {
      //  alert("Please enter a task!");
      return;
    } else {
      setTaskList([
        ...taskList,
        newTask,
      ]); /*push hiigdechhen [] bolgoj map zuw ajilnaa*/
      setInputValue("");
    }
  };

  return (
    <div className={style.main}>
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={handleChange}
        className={style.input}
        value={inputValue}
      />

      {inputValue ? (
        <Button className={style.taskAddBtn} onClick={handleAdd}>
          Add
        </Button>
      ) : (
        <AlertDialogAddTask handleAdd={handleAdd} />
      )}
    </div>
  );
};
