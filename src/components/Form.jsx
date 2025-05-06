import { useState } from "react";
import style from "./style/Form.module.css";

export const Form = ({ setTaskList, taskList }) => {
// settasklist(tasklist[]) uuniig prps buyu destructure awaad input value-g ene 
// setTaskList- ruu [{..,},{...}] ruu object(data bolgoj) 
// ene array dotor SPREAD OPE ashiglaj oruulna. 
// 1. value awhiin tuld state hiiya ;)
    const [inputValue, setInputValue]=useState("")

    const handleChange = (event) =>{
        setInputValue(event.target.value)
    };

    console.log(inputValue)

    const handleAdd =()=>{
        const newTask={
            id: new Date(),
            taskName: inputValue,
            isComplated: false,
        };
        setTaskList([...taskList, newTask]) /*push hiigdechhen [] bolgoj map zuw ajilnaa*/
        setInputValue("")
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

      <button className={style.taskAddBtn} onClick={handleAdd}>Add</button>
    </div>
  );
};
