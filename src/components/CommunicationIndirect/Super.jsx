import React,{useState} from 'react'
import Sub from "./Sub"



export default props => {

  const [num, setNum] = useState(0)


  function handClick(value) {
    setNum(value)
  }


  return (
    <div>
      <h4>Valor:{num}</h4>
      <Sub actionClick={handClick}></Sub>
    </div>
  );
};







