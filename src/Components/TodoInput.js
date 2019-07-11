import React, {Component} from 'react';
import '../Css/TodoInput.css';

class TodoInput extends Component {
    state={
      value:'',
    };
    addItem(){
        console.log('run add item');
    }
    changeText(text){
        console.log('run change Text');
        console.log(text);
        this.setState({
            value:text
        })
    }
    render() {
        return (
            <div>
                <input className="inputText"
                       type="text"
                       onChange={(e)=>{
                    this.changeText(e.target.value)
                }}/>
                <button className="inputButton"
                        onClick={this.addItem} value="add">+</button>
            </div>
        );
    }
}

export default TodoInput;