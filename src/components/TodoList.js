import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoItem from './TodoItem';
import _ from 'lodash';
import {loadItem, toggleItem, removeItem} from "../actions";

class TodoList extends Component{

    constructor(props) {
        super(props);
    }
    loadItem(){
        this.props.loadItem();
    }
    toggleItem(key, checked){
        this.props.toggleItem(key, checked);
        this.loadItem();
    }
    removeItem(key){
        this.props.removeItem(key);
        this.loadItem();
    }
    componentDidMount() {
        this.loadItem();
    }

    render(){
        const { items } = this.props;
        const todoList = _.map(
            items, (item) =>
                <TodoItem
                    key = {item.key}
                    text = {item.text}
                    color = {item.color}
                    checked = {item.checked}
                    onToggle={(e)=>{
                        e.stopPropagation();
                        this.toggleItem(item.key, item.checked);
                    }}
                    onDel={(e)=>{
                        e.stopPropagation();
                        this.removeItem(item.key);
                    }}
                />
        );
        return (
            <div>
                <span>
                <div>
                    <div className="create-button"
                    onClick={(e)=>{
                        e.stopPropagation();
                        this.loadItem();
                    }}>
                        Load TodoList
                    </div>
                    <div>
                        {todoList}
                    </div>
                </div>
                </span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.listReducer.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadItem: bindActionCreators(loadItem, dispatch),
        toggleItem : bindActionCreators(toggleItem, dispatch),
        removeItem: bindActionCreators(removeItem, dispatch)
    }
}

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoList;