import React from 'react';
import item from './items';

const Items = (props) => {
	return (
		<div className="items">
			{props.todos.map((todo, index) => (
				<Item key={index} position={index} todo={todo} handleDeleteItem={props.handleDeleteItem} />
			))}
		</div>
	);
};

export default Items;