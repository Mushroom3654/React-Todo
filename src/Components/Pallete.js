import React, {Component} from 'react';
import '../Css/Pallete.css';

class Pallete extends Component {
    state={
        colorList:[
            {
              'id':'0',
              'color':'#343a40'
            },
            {
                'id':'1',
                'color':'#f03e3e'
            },
            {
                'id':'2',
                'color':'#12b886'
            },

        ]
    };
    changeColor(color){
        console.log('run change color');
    }
    render() {
        const list = this.state.colorList.map((colors)=>(
            <button className="btnColor"
                    key={colors.id}
                    text={colors.color}
                    style={{background:colors.color}}
                    onClick={(e)=>{
                        this.changeColor(colors.color)
                     }}>
                {colors.color}
            </button>
            )
        );
        return (
            <div className="pallete">
                {list}
            </div>
        );
    }
}

export default Pallete;