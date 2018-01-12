import React from 'react';
export default class TodosListItems extends React.Component {
    constructor(props){
        super(props);
            this.state={
                isEditing:false
            };
        }
        renderSectionTask(){
            const {task, isCompleted}=this.props;
            const taskStyle={
                color: isCompleted? 'green':'red',
                curser:'pointer'

            };
            if(this.state.isEditing){
                return(
                    <td>
                        <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput"/>
                        </form>
                    </td>
                );
            }
            return (
                <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
                >{task}</td>
            );
           
        }
        renderActionSection(){
            if(this.state.isEditing){
                return (
        <td>
            <button onClick={this.onSaveClick.bind(this)}>save</button>
            <button onClick={this.onCancelClick.bind(this)}>cancel</button>
        </td>
                );
            }
            return(
                   <td>
            <button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
        </td>
            );
        }
     
    render() {
        return (
                    <tr>
                         {this.renderSectionTask()} 
                        {this.renderActionSection()}
                    </tr>
        );
    }
    onEditClick(){
        this.setState({isEditing:true});
    }
    onCancelClick(){
        this.setState({isEditing:false})
    }
    onSaveClick(event){
        event.preventDefault();
        const oldtask=this.props.task;
        const newtask=this.refs.editInput.value;
        this.props.saveTask(oldtask,newtask);
        this.setState({isEditing:false});

    }
    onDeleteClick(event){
        event.preventDefault();
        const tasktodelete=this.props.task;
        this.props.deleteTask(tasktodelete);
        this.setState({isEditing:true});

    }
 
}