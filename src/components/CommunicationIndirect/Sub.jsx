import React from 'react'




export default props => {
    

    function action(){
        props.actionClick(Math.floor(Math.random() * 10 + 1))
    }

    return (
    <div>
        <button onClick={action}>Alterar</button>
    </div>
    );
};






