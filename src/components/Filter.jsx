
import style from "./style/Filter.module.css";

export const Filter = ({lists, setList, checkedList}) => {
  const chooseList = (filter)=>{
    setList(filter)
    console.log("==========",filter)
  };

  
  return (
    <div>
      {lists.map((filter)=>(
        <button onClick={()=>chooseList(filter)}>{filter}</button>
      ))}
    </div>
  );
};
