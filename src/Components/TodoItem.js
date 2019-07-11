import React, {Component} from 'react';
import '../Css/TodoItem.css';
export default class TodoItem extends Component {

    render() {
        return (
            <div>
                <div className="remove">
                    Delete
                </div>
                <div className={`item ${(this.props.checked) ? 'checked' : ''}`}>
                    - {this.props.text}
                </div>
                <div className="check-mark"> ? </div>
            </div>
        );
    }
}
