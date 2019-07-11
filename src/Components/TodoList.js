import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    state={
        items:[
            {
                number:0,
                text:'Item1',
                color:'#f23saa',
                checked:false
            },
            {
                number:1,
                text:'Item2',
                color:'#fdasd3',
                checked:true
            }
        ]
    };
    render() {
        const todoList = this.state.items.map(
            (item)=>(
                <TodoItem text={item.text}
                          checked={item.checked}/>
            )
        );
        return (
            <div>
                <button>
                    Load
                </button>
                {todoList}
            </div>
        );
    }
}

export default TodoList;