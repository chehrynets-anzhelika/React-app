import { productsType } from "../type";

const defaultStore = {
    products:  [],
    error: null,
}

export const productsReducer = (state = defaultStore, action) => {
    switch(action.type){
        case productsType.GET_PRODUCTS_REQUESTED:
            return {...state}
        case productsType.GET_PRODUCTS_SUCCESS:
            return {...state, products: [...action.payload], error: false}
        case productsType.GET_PRODUCTS_ERROR: 
        return {...state, products: [], error: true}
        default:
            return state;
    }
}