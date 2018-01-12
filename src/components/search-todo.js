import React from 'react';
export default class SearchTodo extends React.Component {
    constructor(props){
        super(props);
        this.state={error1:' '};
    }
    renderError1(){
        if(!this.state.error1){
            return <div style={{color:'red'}}>ITEM NOT FOUND..
            </div>
        }
    return (<div style={{color:'blue'}}>{this.state.error1}
            </div>);
    }
    render(){
        return (
            <form onSubmit={this.onSearchTodo.bind(this)}>
                <input type="text" placeholder="search a todo list" ref="searchInput"/>
                <button>Search</button>
                {this.renderError1()}
                </form>
                 );

    }
    onSearchTodo(event){
        event.preventDefault();
        const searchInput=this.refs.searchInput.value;
        const validateSearch1=this.validateSearch(searchInput);
       
        if(validateSearch1){
           this.setState({error1:validateSearch1});
            return;
        }
        this.setState({error1:null});
    }
   validateSearch(task){
    if(!task){
        return null;
    }
        else if(_.find(this.props.todos, todo =>todo.task===task)){
            return task;
        }
        else{
            return null;
        }
   }

}