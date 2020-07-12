import React, {Component} from 'react';


class Addtodo extends Component {
    constructor(props){
        super(props)

        this.state = ""
    }

    render() {
		return (
			<div className="add-todo">
				<form onSubmit={this.handleAddItem}>
					<input type="text" name="newItem" id="newTodo" placeholder="enter todo here" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default Addtodo;