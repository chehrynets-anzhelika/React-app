import { currentType } from "../type"

const defaultStore = {
    currentProduct: [],
}

export const currentProductReducer = (state = defaultStore, action) => {
    switch(action.type){
        case currentType.ADD_CURRENT:
            return {...state, currentProduct: action.payload}
        
        case currentType.REMOVE_CURRENT:
            return {...state, currentProduct: state.currentProduct.filter(item => item !== action.payload)}
        default:
            return state;
    }
}