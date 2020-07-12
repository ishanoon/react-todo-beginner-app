import React from 'react';

const Item = (props) =>{
    return(
        <div>
            <span>{props.position + 1}</span>
            <span>{props.todo}</span>
            <button type="button" onClick={(e)=> props.handleDeleteItem(props.todo)}> X</button>
        </div>
    )
}
export default Item;