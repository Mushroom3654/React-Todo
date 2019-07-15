import React, { Component } from 'react';
import '../css/Pallete.css';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {changeTextColor} from "../actions";


class Pallete extends Component{

    changeColor(color){
        this.props.changeTextColor(color);
    }

    render(){
        const { colors } = this.props;

        const colorList = colors.map(
            (colors) => (
                <button
                    className="btnColor"
                    key={colors.id}
                    text={colors.color}
                    style={{background:colors.color}}
                    onClick={(e)=>{
                        //다른 컴포넌트에서 클릭 이벤트가 일어나는걸 방지
                        e.stopPropagation();
                        this.changeColor(colors.color);
                    }}
                >{colors.color}
                </button>
            )
        );

        return (
            <div className="palette">
                {colorList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        colors: state.colorReducer.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTextColor : bindActionCreators(changeTextColor, dispatch)
    }
}

Pallete = connect(mapStateToProps, mapDispatchToProps)(Pallete);
export default Pallete;
