import { useState } from "react";
import style from "./style/Filter.module.css";

export const Filter = () => {


  return (
    <div className={style.mainBtn}>
      <button onClick={allBtn}>All</button>
      <button onClick={active}>Active</button>
      <button onClick={Completed}>Completed</button>
    </div>
  );
};
