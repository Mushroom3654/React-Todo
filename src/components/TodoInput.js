import React, {Component} from 'react';
import '../css/TodoInput.css';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {addItem, loadItem} from "../actions";



class TodoInput extends Component{
    constructor(props) {
        super(props);
        this.state={
            value:''
        }
    };
    loadItem(){
        this.props.loadItem();
    }
    addItem(text, checked, color){
        if(!this.state.value) return false;
        this.props.addItem(text,checked, color);
        this.setState({
            value:''
        });
       this.loadItem();
    }
    render(){
        const {color} = this.props;

        return (
            <div className="form">
                <input
                    value={this.state.value}
                    style={{color}}
                    onChange={(e)=>{
                        this.setState({
                            value:e.target.value
                        })
                    }}
                />
                <div className="create-button"
                onClick={
                    (e)=>{
                        this.addItem(this.state.value, false, color)
                    }
                }>
                    +
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        color:state.colorReducer.inputCol
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem:bindActionCreators(addItem, dispatch),
        loadItem:bindActionCreators(loadItem, dispatch)
    }
}

TodoInput = connect(mapStateToProps, mapDispatchToProps)(TodoInput);

export default TodoInput;