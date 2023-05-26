import { cartType } from "../type";

export const addCart = (payload) => 
({ type: cartType.ADD_CART, payload });

export const removeCart = (payload) => 
({type: cartType.REMOVE_CART, payload});

export const removedAllCart = () => 
({ type: cartType.REMOVED_ALL_CARTS });