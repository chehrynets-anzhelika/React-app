import { favoriteType } from "../type";

const defaultStore = {
    favorId: [],
}

export const favoriteReducer = (state = defaultStore, action) => {
    switch(action.type){
        case favoriteType.ADD_FAVORITE:
            return {...state, favorId: [...state.favorId, action.payload]}
        
        case favoriteType.REMOVE_FAVORITE:
            return {...state, favorId: state.favorId.filter(item => item !== action.payload)}
        default:
            return state;
    }
}