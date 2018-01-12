import React from 'react';
import TodosList from './todos-list.js';
import CreateTodo from './create-todo.js';
import SearchTodo from './search-todo.js';
import DropdownTodo from './dropdown-list.js';
import Person from './Person.js';
const todos= [
    {
        task:'Breakfast',
        isCompleted: 'false'
    },
    {
        task:'Dinner',
        isCompleted: 'true' 
    },
    {
        task:'Lunch',
        isCompleted:false
    }
];
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todos
        }
    }
    render() {
        return (
            <div id="appid">
            <h1>React Todos App1</h1>
            <CreateTodo id="createid" todos={this.state.todos} createTask={this.createTask.bind(this)}/>
            <TodosList id="todolistid" 
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
                 />
                 <SearchTodo todos={this.state.todos}/>
                 <DropdownTodo todos={this.state.todos}/>
                 <Person name="jasgun" age="3"></Person>
            </div>
        );
    }
    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo=>todo.task===task);
        foundTodo.isCompleted=!foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }
    createTask(task){
        this.state.todos.push ({
            task,
            isCompleted:false
        });
        this.setState({todos: this.state.todos});
    }
    saveTask(oldtask, newtask){
        const foundTodo =  _.find(this.state.todos, todo=>todo.task===oldtask);
        foundTodo.task=newtask;
        this.setState({todos: this.state.todos});
    }
    deleteTask(tasktodelete){
        _.remove(this.state.todos, todo=>todo.task===tasktodelete);
        this.setState({todos: this.state.todos});
    }
   
}