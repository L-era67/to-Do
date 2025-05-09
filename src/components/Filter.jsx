
import style from "./style/Filter.module.css";

export const Filter = ({lists, setList, checkedList}) => {
  const chooseList = (filter)=>{
    setList(filter)  
    console.log("==========",filter)
  };

  
  return (
    <div style={{display:"flex", gap:"6px"}}>
      {lists.map((filter)=>(
      
        // <button key={filter.name} style={{background:filter.backgroundColor, padding:"5px"}} onClick={()=>chooseList(filter.name)}>{filter.name}</button>
        <button onClick={() =>chooseList(filter)}
        style={{
          padding:"4px 12px",
          background: checkedList === filter? "#3C82F6": "#F3F4F6",
          color : checkedList === filter? "#FFFFFF" : "#363636",
          border:"none",
          borderRadius:"6px"
        }}
        >{filter}</button>

      ))}
    </div>
  );
};
