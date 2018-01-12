import React from 'react';
export default class DropdownTodo extends React.Component {
    
    render(){
        const todos=this.props.todos;
        return (
            <form id="dpid" onSubmit={this.onSubmitDp.bind(this)}>
            <select>{todos.map(todo => <option>{todo.task}</option>)}</select>
            <input type="submit"/>
            </form>
        );
    }
    onSubmitDp(event){
        event.preventDafault();
        
    }
    
    
}