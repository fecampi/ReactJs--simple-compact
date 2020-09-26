import React from 'react'
import Sub from "./Sub"



export default props =>
<div>
    {/* props passa todas as propriedades para o Sub */}
    <Sub {...props} >João</Sub>
      {/* props passa somente a propriedade sobrenome para o Sub */}
    <Sub sobrenome={props.sobrenome}>Maria</Sub>
    <Sub sobrenome="Silva">Pedro</Sub>

</div>







