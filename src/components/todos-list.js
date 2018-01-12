import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header.js';
import TodosListItems from './todos-list-items.js';
export default class TodosList extends React.Component {
    
   renderItems(){
       const props=_.omit(this.props,'todos');
       return _.map(this.props.todos,(todo,index)=><TodosListItems id="listitemid" key={index} {...todo}{...props}/>);
   }
   render() {
        return (
            <table id="tableid">
               <TodosListHeader id="headerid"/> 
               <tbody>
                   {this.renderItems()}
               </tbody>
            </table>
        );
    }
}