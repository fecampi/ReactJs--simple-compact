import React,{useState} from 'react'



export default props => {

const [name,setName] = useState("pedro");



  return (
    <div>
      <h3>{name}</h3>
      {/* Somente leitura */}
      <input type="text" value={name} readOnly></input>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
    </div>
  );
};







