export const actionType={
    //Change Color
    CHANGE_INPUT_COLOR_REQUEST: 'CHANGE_INPUT_COLOR_REQUEST',
    CHANGE_INPUT_COLOR_SUCCESS: 'CHANGE_INPUT_COLOR_SUCCESS',
    CHANGE_INPUT_COLOR_FAILED: 'CHANGE_INPUT_COLOR_FAILED',

    //Control Item
    Add_Item_REQUEST: 'Add_Item_REQUEST',
    Add_Item_SUCCESS: 'Add_Item_SUCCESS',
    Add_Item_FAILED: 'Add_Item_FAILED',

    LOAD_Item_REQUEST: 'LOAD_Item_REQUEST',
    LOAD_Item_SUCCESS: 'LOAD_Item_SUCCESS',
    LOAD_Item_FAILED: 'LOAD_Item_FAILED',

    REMOVE_Item_REQUEST: 'REMOVE_Item_REQUEST',
    REMOVE_Item_SUCCESS: 'REMOVE_Item_SUCCESS',
    REMOVE_Item_FAILED: 'REMOVE_Item_FAILED:',

    TOGGLE_Item_REQUEST:'TOGGLE_Item_REQUEST',
    TOGGLE_Item_SUCCESS:'TOGGLE_Item_SUCCESS',
    TOGGLE_Item_FAILED:'TOGGLE_Item_FAILED',

};
export function addItem(text, checked, color){
    return{
        type: actionType.Add_Item_REQUEST,
        text,
        checked,
        color
    }
}
export function removeItem(key){
    return{
        type: actionType.REMOVE_Item_REQUEST,
        key
    }
}
export function toggleItem(key, checked){
    return{
        type: actionType.TOGGLE_Item_REQUEST,
        key,
        checked
    }
}
export function loadItem(){
    return{
        type: actionType.LOAD_Item_REQUEST
    }
}
export function changeTextColor(color) {
    return{
        type: actionType.CHANGE_INPUT_COLOR_REQUEST,
        color
    }
}