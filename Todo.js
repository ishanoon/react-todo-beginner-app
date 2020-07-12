import React, {Component} from 'react';
import './Todo.css';
import Addtodo from "./components/Addtodo"
import Header from "./components/header"
import Items from "./components/items"

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos : []
    }
  }
handleAddItem = (item) =>{
  this.setState((prevState)=>{
    todos: prevState.todos.concat(item)
  })
}
handleDeleteItem = (itemToRemove)=>{
  this.setState((prevState)=>{
    todos:prevState.todos.filter((item =>{
      return itemToRemove != item
    }))
  })
}
  
  render() {
    return (
      <div className="parent">
        <div className="main">
          <Header/>
          <Addtodo handleAddItem = {this.handleAddItem} handleDeleteItem={this.handleDeleteItem} todo={this.state.todos}/>
          <Items todo={this.state.todo} />
        </div>
      </div>
    );
  }
}



Todo.defaultProps = {
  todos : ["Learn react and react native","Meeting at 7pm"]
}

export default Todo;
