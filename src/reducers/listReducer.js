import {actionType} from "../actions";

const initialState={
    items :[]
};
function listReducer(state=initialState, action) {
    switch (action.type) {
        case actionType.Add_Item_SUCCESS:
            console.log('RUN_ADD_ITEMS_SUCCESS');
            return{
                ...state,
                items:action.items
            };
        case actionType.Add_Item_FAILED:
            console.log('RUN_ADD_ITEMS_FAILED');
            return{
                ...state,

            };
        case actionType.LOAD_Item_SUCCESS:
            console.log('RUN_LOAD_ITEMS_SUCCESS');
            return{
                ...state,
                items:action.items
            };
        case actionType.LOAD_Item_FAILED:
            console.log('RUN_LOAD_ITEMS_FAILED');
            return{
                ...state,

            };
        case actionType.TOGGLE_Item_SUCCESS:
            console.log('RUN_TOGGLE_ITEMS_SUCCESS');
            return{
                ...state,
                items:action.items
            };
        case actionType.TOGGLE_Item_FAILED:
            console.log('RUN_TOGGLE_ITEMS_FAILED');
            return{
                ...state,

            };
        case actionType.REMOVE_Item_SUCCESS:
            console.log('RUN_REMOVE_ITEMS_SUCCESS');
            return{
                ...state,
                items:action.items
            };
        case actionType.REMOVE_Item_FAILED:
            console.log('RUN_REMOVE_ITEMS_FAILED');
            return{
                ...state,

            };

        default:
            return state
    };
}

export default listReducer;