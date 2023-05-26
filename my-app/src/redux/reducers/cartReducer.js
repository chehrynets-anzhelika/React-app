import { cartType } from "../type";

const defaultStore = {
    cartId: [],
}


export const cartReducer = (state = defaultStore, action) => {
    switch(action.type){
        case cartType.ADD_CART:
            return {...state, cartId: [...state.cartId].concat(action.payload) }
        
        case cartType.REMOVE_CART:
            return {...state, cartId: state.cartId.filter(item => item !== action.payload)}
        
        case cartType.REMOVED_ALL_CARTS:
            return {...state, cartId: []}
            default:
            return state;
    }
}