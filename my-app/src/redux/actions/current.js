import { currentType } from "../type";

export const addCurrentProduct = (payload) => 
({ type: currentType.ADD_CURRENT, payload });

export const removeCurrentProduct = (payload) => 
({type: currentType.REMOVE_CURRENT, payload});