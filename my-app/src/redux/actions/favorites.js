import { favoriteType } from "../type";

export const addFavorite = (payload) => 
({ type: favoriteType.ADD_FAVORITE, payload });

export const removeFavorite = (payload) => 
({ type: favoriteType.REMOVE_FAVORITE, payload });