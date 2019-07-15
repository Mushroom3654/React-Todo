import {actionType} from "../actions";

const defaultCol = "#343a40";
const initColorList = [
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
    {
        'id':'3',
        'color':'#228ae6'
    },
];

const initialState = {
    list : initColorList,
    inputCol: defaultCol
};

function colorReducer(state=initialState, action) {
    switch (action.type) {
        case actionType.CHANGE_INPUT_COLOR_SUCCESS:
            return{
                ...state,
                inputCol:action.data
            };
        case actionType.CHANGE_INPUT_COLOR_FAILED:
            return {
              ...state,
            };
        default:
            return state
    };
}

export default colorReducer;